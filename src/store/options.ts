import { createSlice } from "@reduxjs/toolkit";

interface FormOption {
    closed: boolean,
    type: 'formPerson' | 'formNote' | null
}

export interface OptionsState {
    search: string,
    sort: 'name' | 'surname' | null,
    selectMode: boolean,
    searchOpened: boolean,
    form: FormOption
}

const initialState: OptionsState = {
    search: '',
    sort: null,
    selectMode: false,
    searchOpened: false,
    form: {
        closed: true,
        type: null
    }
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
        },
        setModal: (state, {payload}) => {
            return {...state, form: payload}
        }
    }
});

export const {setSearch, setSort, toggleMode, toggleSearchVisibility, setModal} = optionsSlice.actions;