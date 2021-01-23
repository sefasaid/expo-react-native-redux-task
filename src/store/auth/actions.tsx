import { User, Wallet } from './models';
import { AuthActionTypes, GET_WALLETS, HIDE_LOADING, HIDE_TOAST, LOGIN_SUCCESS, SHOW_LOADING, SHOW_TOAST } from './actionTypes';
const API_URL = 'https://uat.quiqone.com/api';


export function showLoading(message: string): AuthActionTypes {
    return {
        type: SHOW_LOADING,
        payload: message
    };
}

export function hideLoading(): AuthActionTypes {
    return {
        type: HIDE_LOADING
    };
}

export function showToast(message: string): AuthActionTypes {
    return {
        type: SHOW_TOAST,
        payload: message
    };
}

export function hideToast(): AuthActionTypes {
    return {
        type: HIDE_TOAST,
    };
}
export function loginSuccess(user: User): AuthActionTypes {
    return {
        type: LOGIN_SUCCESS,
        payload: user,
    };
}

export function getWallets(wallets: Wallet[]): AuthActionTypes {
    return {
        type: GET_WALLETS,
        payload: wallets,
    };
}