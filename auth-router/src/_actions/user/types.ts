import { LoginState } from "../../_reducers/user-reducer";

export interface LoginData {
    email: string;
    password: string;
}

export const LOGIN_USER = 'LOGIN_USER' as const;

export interface SetLoginState {
    type: typeof LOGIN_USER
    payload: LoginState | null,
}
