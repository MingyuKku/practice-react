import { Dispatch } from "redux";
import { SET_RESULT } from "./types"
import axios from "axios"
import { ThunkActionType } from "../_thunk";
import { ResultState } from "../_reducers/__01__reducer";



export const set_result = (user: string) => {
    return {
        type: SET_RESULT,
        payload: user,
    }
}


export const fetch_result = ():ThunkActionType<ResultState> => {
    return async (dispatch: Dispatch, getState: () => ResultState) => {
        
        const { data } = await axios.get('https://randomuser.me/api/?results=100')
        console.log('헷!', data)
        dispatch(set_result(data.results))   
    }
}