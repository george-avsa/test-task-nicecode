import { createSlice } from "@reduxjs/toolkit";

export interface OptionsState {
    search: string,
    sort: 'name' | 'surname' | null
}

const initialState: OptionsState = {
    search: '',
    sort: null
}

export const optionsSlice = createSlice({
    name: 'options',
    initialState,
    reducers: {
        setSearch: (state, {payload}) => {
            return {...state, search: payload}
        },
        setSort: (state, {payload}) => {
            let sort = null;
            if (payload === 'name') {
                sort = 'name';
            } else if (payload === 'surname') {
                sort = 'surname';
            }
            return {...state, sort};
        }
    }
})