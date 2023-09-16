import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { Person, PersonListItem } from "persons";

const initialState:Array<PersonListItem> = [];

export const getPesonsList = createAsyncThunk(
    'personList/getList',
    async(payload, {dispatch}) => {
        return axios.get('http://localhost:3001/data')
            .then(response => {
                const personListMinimized = response.data.map((personData: Person):PersonListItem => ({
                    id: personData.id,
                    firstName: personData.firstName,
                    lastName: personData.lastName,
                    avatar: personData.avatar,
                    telegram: personData.telegram,
                    warning: personData.warning,
                    selected: personData.selected,
                }))
                dispatch(setPersons(personListMinimized))
            })
            .catch(response => {
                console.log(123)
            })
    }
)

export const personList = createSlice({
    name: 'personList',
    initialState,
    reducers: {
        setPersons: (state, {payload}) => {
            return payload
        },
    },
});

export const {setPersons} = personList.actions;