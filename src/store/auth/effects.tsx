import { Dispatch } from 'redux';
import { hideLoading, loginSuccess, showLoading, showToast, } from './actions';
import { AuthActionTypes } from './actionTypes';
import { User } from './models';
const API_URL = 'https://uat.quiqone.com/api';
import axios from "axios"

export const loginPost = (user: User) => {
    return function (dispatch: Dispatch<AuthActionTypes>) {
        const POST_URL = API_URL + '/Security/GetToken';
        showLoading('Loading...');
        const requestOptions = { UserName: user.username, Password: user.password };
         axios.post(
            POST_URL, requestOptions
        ).then(response => {
            dispatch(loginSuccess(response.data));
        }).catch(error => {
            dispatch(showToast('Bir hata oluştu'))
        }).finally(() => {hideLoading()})

    };
};
