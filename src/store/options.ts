import { createSlice } from "@reduxjs/toolkit";

export interface OptionsState {
    search: string,
    sort: 'name' | 'surname' | null,
    selectMode: boolean
    searchOpened: boolean
}

const initialState: OptionsState = {
    search: '',
    sort: null,
    selectMode: false,
    searchOpened: false,
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
        },
        toggleMode: (state) => {
            return {...state, selectMode: !state.selectMode}
        },
        toggleSearchVisibility: (state) => {
            return {...state, searchOpened: !state.searchOpened}
        }
    }
});

export const {setSearch, setSort, toggleMode, toggleSearchVisibility} = optionsSlice.actions;