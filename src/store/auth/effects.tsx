import { Dispatch } from 'redux';
import { hideLoading, initApp, loginSuccess, logout, showLoading } from './actions';
import { AuthActionTypes } from './actionTypes';
import { User } from './models';
const API_URL = 'https://uat.quiqone.com/api';
import axios from "axios"
import Toast from 'react-native-root-toast';
import AsyncStorage from '@react-native-community/async-storage';
export const loginPost = (user: User) => {
    return function (dispatch: Dispatch<AuthActionTypes>) {
        const POST_URL = API_URL + '/Security/GetToken';
        dispatch(showLoading('Loading...'));
        const requestOptions = { UserName: user.username, Password: user.password };
        axios.post(
            POST_URL, requestOptions
        ).then(response => {
            console.warn(response.data);

            user.token = response.data.token;
            setLoginLocal(user).then(() => {
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