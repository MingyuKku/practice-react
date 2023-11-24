export const SET_RESULT = 'SET_RESULT' as const;

export interface SetResult {
    type: typeof SET_RESULT;
    payload: string;
}