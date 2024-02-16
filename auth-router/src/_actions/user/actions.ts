import axios from 'axios';
import { AnyAction, Dispatch } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { LoginData, LOGIN_USER, SetLoginState } from './types';
import { LoginState } from '../../_reducers/user-reducer';

export const setLoginState = (value:LoginState | null):SetLoginState => {
    return {
        type: LOGIN_USER,
        payload: value,
    }
}

export const loginUser = ({ email, password }: LoginData) => {
    return async (dispatch: ThunkDispatch<LoginState, void, AnyAction>) => {

        return axios.post('/api/users/login', {
            email,
            password
        })
        .then(({data}) => {
            dispatch(setLoginState(data));
            return data;
        })
        .catch(err => {
            dispatch(setLoginState(null));
            throw err;
        })
    }
}

