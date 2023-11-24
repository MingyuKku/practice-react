import { SET_RESULT, SetResult } from "../_actions/types";

export interface ResultState {
    result: {
        gender: string;
        email: string;
        cell: string;
        nat: string;
        phone: string;
        picture: {
            large: string;
            medium: string;
            thumbnail: string;
        };
    }[];
}

const initState:ResultState = {
    result: []
}

export default function reducer__01 (state:ResultState = initState, action:SetResult) {
    switch (action.type) {
        case SET_RESULT:
            return {
                ...state,
                result: action.payload,
            }
        default:
            return state;
    }
}