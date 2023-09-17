import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Note } from "persons";
import { PersonListItem } from "persons";
import { AppDispatch, RootState } from "store";
import { setModal } from "./options";

export const loadPersonToForm = createAsyncThunk<
    void,
    number,
    {
        state: RootState,
        dispatch: AppDispatch
    }
>(
    'forms/loadPersonToForm',
    async (payload, {getState, dispatch}) => {
        const {
            id,
            firstName,
            lastName,
            telegram,
            warning,
        } = getState().personDetails;
        
        dispatch(loadFormValues({type: 'formPerson', values: {
            id,
            firstName,
            lastName,
            telegram,
            warning,
        }}))
        dispatch(setModal({closed: false, type:'formPerson'}))
    }
)

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
        },
        resetFields: (state, {payload}) => {
            return {
                ...state, [payload]: initialState[payload]
            }
        },
        loadFormValues: (state, {payload}) => {
            console.log(payload.type, payload.values)
            state[payload.type] = {...payload.values}
        }
    }
})

export const {setInputValue, resetFields, loadFormValues} = formsSlice.actions;