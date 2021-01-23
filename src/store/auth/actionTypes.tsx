import { User, Wallet } from "./models";

export const SHOW_LOADING = 'SHOW_LOADING';
export const HIDE_LOADING = 'HIDE_LOADING';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const GET_WALLETS = 'GET_WALLETS';
export const INIT_APP = 'INIT_APP';
export const LOGOUT = 'LOGOUT';
interface ShowLoadingAction {
    type: typeof SHOW_LOADING;
    payload: string;
}
interface HideLoadingAction {
    type: typeof HIDE_LOADING;
}

interface LoginSuccessAction {
    type: typeof LOGIN_SUCCESS;
    payload: User;
}
interface GetWalletAction {
    type: typeof GET_WALLETS;
    payload: Wallet[];
}
interface InitAppAction {
    type: typeof INIT_APP;
    payload: User;
}
interface LogoutAction {
    type: typeof LOGOUT;
}
export type AuthActionTypes =
    ShowLoadingAction |
    HideLoadingAction |
    LoginSuccessAction |
    GetWalletAction |
    InitAppAction |
    LogoutAction
    ;