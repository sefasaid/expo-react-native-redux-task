import { AuthActionTypes, GET_WALLETS, HIDE_LOADING, HIDE_TOAST, LOGIN_SUCCESS, SHOW_LOADING, SHOW_TOAST } from './actionTypes';
import { UserState } from './models';
const initialState: UserState = {
    accountWallets: [],
    user: {
        username: '',
        password: '',
        token: ''
    },
    loading: {
        show: false,
        message: ''
    },
    toast: {
        show: false,
        message: ''
    }
};
export function authReducer(
    state = initialState,
    action: AuthActionTypes,
): UserState {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return {
                ...state,
                user: action.payload
            };
        case GET_WALLETS:
            return {
                ...state,
                accountWallets: action.payload
            };
        case SHOW_LOADING:
            return {
                ...state,
                loading: {
                    show: true,
                    message: action.payload
                }
            };
        case HIDE_LOADING:
            return {
                ...state,
                loading: {
                    show: true,
                    message: ''
                }
            };
        case SHOW_TOAST:
            return {
                ...state,
                loading: {
                    show: true,
                    message: action.payload
                }
            };
        case HIDE_TOAST:
            return {
                ...state,
                loading: {
                    show: true,
                    message: ''
                }
            };
        default:
            return state;
    }
}