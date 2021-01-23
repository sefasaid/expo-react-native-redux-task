import { User, Wallet } from './models';
import { AuthActionTypes, GET_WALLETS, HIDE_LOADING, INIT_APP, LOGIN_SUCCESS, LOGOUT, SHOW_LOADING } from './actionTypes';

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

export function initApp(user: User): AuthActionTypes {
    return {
        type: INIT_APP,
        payload: user,
    };
}

export function logout(): AuthActionTypes {
    return {
        type: LOGOUT
    };
}