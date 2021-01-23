import { User, Wallet } from "./models";

export const SHOW_LOADING = 'SHOW_LOADING';
export const HIDE_LOADING = 'HIDE_LOADING';
export const SHOW_TOAST = 'SHOW_TOAST';
export const HIDE_TOAST = 'HIDE_TOAST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const GET_WALLETS = 'GET_WALLETS';
interface ShowLoadingAction {
    type: typeof SHOW_LOADING;
    payload: string;
}
interface HideLoadingAction {
    type: typeof HIDE_LOADING;
}
interface ShowToastAction {
    type: typeof SHOW_TOAST;
    payload: string;
}
interface HideToastAction {
    type: typeof HIDE_TOAST;
}
interface LoginSuccessAction {
    type: typeof LOGIN_SUCCESS;
    payload: User;
}
interface GetWalletAction {
    type: typeof GET_WALLETS;
    payload: Wallet[];
}
export type AuthActionTypes =
    ShowLoadingAction |
    HideLoadingAction |
    ShowToastAction |
    HideToastAction |
    LoginSuccessAction |
    GetWalletAction
    ;