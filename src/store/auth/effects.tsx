import { Dispatch } from 'redux';
import { getWalletsAction, hideLoading, initApp, loginSuccess, logout, showLoading } from './actions';
import { AuthActionTypes } from './actionTypes';
import { User } from './models';
const API_URL = 'https://uat.quiqone.com/api';
import axios from "axios"
import Toast from 'react-native-root-toast';
import AsyncStorage from '@react-native-community/async-storage';
import setAuthToken from '../../tools/setToken';
export const loginPost = (username: string, password: string) => {
    return function (dispatch: Dispatch<AuthActionTypes>) {
        const POST_URL = API_URL + '/Security/GetToken';
        dispatch(showLoading('Loading...'));
        const requestOptions = { UserName: username, Password: password };
        axios.post(
            POST_URL, requestOptions
        ).then(response => {
            const user: User = {
                username: username,
                password: password,
                token: response.data.token,
                id: response.data.id,
                name : response.data.name
            };
            setLoginLocal(user).then(() => {
                setAuthToken(response.data.token);
                dispatch(hideLoading());
                dispatch(loginSuccess(user));
            }).catch(err => {
                dispatch(hideLoading());
                Toast.show('There is an error. Please try again', {
                    duration: Toast.durations.SHORT,
                    position: Toast.positions.BOTTOM,
                    shadow: true,
                    animation: true,
                    hideOnPress: true,
                    delay: 0,
                });
            })

        }).catch(error => {
            dispatch(hideLoading());
            Toast.show(error.response.data.message, {
                duration: Toast.durations.SHORT,
                position: Toast.positions.BOTTOM,
                shadow: true,
                animation: true,
                hideOnPress: true,
                delay: 0,
            });
        })

    };
};
const setLoginLocal = async (user: User) => {
    return AsyncStorage.setItem('user', JSON.stringify(user));
};
export const loadApp = () => {
    return function (dispatch: Dispatch<AuthActionTypes>) {
        AsyncStorage.getItem('user').then((data) => {
            if (data) {
                const user = JSON.parse(data);
                setAuthToken(user.token)
                dispatch(initApp(user));
            }
        })
    }
}
export const logoutApp = () => {
    return function (dispatch: Dispatch<AuthActionTypes>) {
        AsyncStorage.removeItem('user').then((data) => {
            dispatch(logout());
        })
    }
}


export const getWallets = (id: string) => {
    return function (dispatch: Dispatch<AuthActionTypes>) {
        const GET_URL = API_URL + '/Profile/Model/' + id + '?providerCode=QQ1';
        dispatch(showLoading('Loading...'));
        axios.get(
            GET_URL
        ).then(response => {
            dispatch(hideLoading());
            dispatch(getWalletsAction(response.data.accountWallets));
        }).catch(error => {
            dispatch(hideLoading());
            Toast.show(error.response.data.message, {
                duration: Toast.durations.SHORT,
                position: Toast.positions.BOTTOM,
                shadow: true,
                animation: true,
                hideOnPress: true,
                delay: 0,
            });
        })
    }
}