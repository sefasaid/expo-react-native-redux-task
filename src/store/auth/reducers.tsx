import { AuthActionTypes, GET_WALLETS, HIDE_LOADING, INIT_APP, LOGIN_SUCCESS, LOGOUT, SHOW_LOADING } from './actionTypes';
import { UserState } from './models';
const initialState: UserState = {
    accountWallets: [],
    user: {
        username: '',
        password: '',
        token: '',
        id: '',
        name: ''
    },
    loading: {
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
                    show: false,
                    message: ''
                }
            };
        case INIT_APP:
            return {
                ...state,
                user: action.payload
            };
        case LOGOUT:
            return {
                ...state,
                user: {
                    token: '',
                    username: '',
                    password: '',
                    id: '',
                    name: ''
                }
            };
        default:
            return state;
    }
}