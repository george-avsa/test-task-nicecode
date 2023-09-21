import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface FormOption {
    closed: boolean,
    type: 'formPerson' | 'formNote' | 'promptDelete' | null
}

interface personControlsMenu {
    name: string,
    active: boolean,
}

export interface OptionsState {
    search: string,
    sort: 'name' | 'surname' | null,
    selectMode: boolean,
    searchOpened: boolean,
    form: FormOption,
    logger: string
    personControlsMenu: personControlsMenu[]
}

const initialState: OptionsState = {
    search: '',
    sort: null,
    selectMode: false,
    searchOpened: false,
    form: {
        closed: false,
        type: 'formNote'
    },
    logger: '',
    personControlsMenu: [
        {name: "Заметки", active: true},
        {name: "Консультации", active: false},
        {name: "Видео", active: false},
        {name: "Мероприятия", active: false},
    ]
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
        },
        setLogger: (state, {payload}) => {
            return {...state, logger: payload}
        },
        setPersonControlsMenu: (state, {payload}) => {
            return {...state, personControlsMenu: payload};
        }
    }
});

export const {
    setSearch,
    setSort,
    toggleMode,
    toggleSearchVisibility,
    setModal,
    setLogger,
    setPersonControlsMenu,
} = optionsSlice.actions;