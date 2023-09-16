import { createSlice } from "@reduxjs/toolkit";
import { Note } from "persons";
import { PersonListItem } from "persons";

interface Forms {
    formPerson: PersonListItem,
    formNote: Note,
}

export const initialState: Forms = {
    formPerson: {
        id: '',
        firstName: '',
        lastName: '',
        avatar: null,
        telegram: false,
        warning: false,
        selected: false,
    },
    formNote: {
        id: '',
        date: new Date().toString(),
        text: '',
        uploaded: ''
    },
}

export interface InputType {
    type: string,
    value: string | boolean
}

export const formsSlice = createSlice({
    name: 'forms',
    initialState,
    reducers: {
        setInputValue: (state, {payload}) => {
            if (payload instanceof Object) {
                state[payload.form][payload.type] = payload.value
            }
        }
    }
})

export const {setInputValue} = formsSlice.actions;