import { AsyncThunk, AsyncThunkOptions, Store, ThunkAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { Person, PersonListItem } from "persons";
import { AppDispatch, RootState } from "store";
import {v4 as uuid} from 'uuid';
import { resetFields } from "./forms";
import { setModal } from "./options";

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

export const postPerson = createAsyncThunk<
    void,
    string,
    {
        dispatch: AppDispatch
        state: RootState
    }
>(
    'personList/addPerson',
    async (payload, {getState, dispatch}) => {
        const state = getState();
        const body = {...state.forms.formPerson};
        if (payload) {
            return axios.patch(`http://localhost:3001/data/${payload}`, body)
            .then(response => {
                if (response.status === 200) {
                        dispatch(updatePerson({...body}));
                        dispatch(resetFields('formPerson'));
                        dispatch(setModal({type: '', closed: true}))
                    }
                })
        } else {
            let id = uuid();
            body.id = id;
            body.avatar = null;
            return axios.post('http://localhost:3001/data', body)
                .then(response => {
                    if (JSON.stringify(response.data) === JSON.stringify(body)) {
                        dispatch(addPerson(response.data));
                        dispatch(resetFields('formPerson'));
                        dispatch(setModal({type: '', closed: true}))
                    }
                })
            .catch()
        }
    }
)

export const personList = createSlice({
    name: 'personList',
    initialState,
    reducers: {
        setPersons: (state, {payload}) => {
            return payload
        },
        addPerson: (state, {payload}) => {
            return [...state, payload];
        },
        updatePerson: (state, {payload}) => {
            const newPersonList = state.map(person => {
                if (person.id === payload.id) {
                    return {...person, ...payload}
                } 
                return person
            })
            return newPersonList;
        }
    },
});

export const {setPersons, addPerson, updatePerson} = personList.actions;