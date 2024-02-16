import { SetLoginState } from "_actions/user/types";

export interface LoginState {
    isAuth: boolean | null;
    email: string;
    isAdmin: boolean;
    lastname: string;
    name: string;
    role: number;
    _id: string | null;
}

const initState:LoginState = {
    isAuth: null, // 초기값
    email: '',
    isAdmin: false,
    lastname: '',
    name: '',
    role: 0,
    _id: null
}


const userReducer = (state:LoginState=initState, action: SetLoginState): LoginState => {
    switch (action.type) {
        default:
            return state;
    }
}

export default userReducer;