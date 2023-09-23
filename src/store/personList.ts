import { AsyncThunk, AsyncThunkOptions, Store, ThunkAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { Person, PersonListItem } from "persons";
import { AppDispatch, RootState } from "store";
import {v4 as uuid} from 'uuid';
import { resetFields } from "./forms";
import { setLogger, setModal, toggleMode } from "./options";
import { getPersonDetails, setPersonDetails } from "./personDetails";

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

        // если есть payload, тогда изменить пользователя
        if (payload) {
            return axios.patch(`http://localhost:3001/data/${payload}`, body)
            .then(response => {
                dispatch(resetFields());
                dispatch(setModal({type: '', closed: true}))
                if (response.status.toString().startsWith('2')) {
                    dispatch(updatePerson({...body}));
                    dispatch(setPersonDetails({...state.personDetails, ...state.forms.formPerson}))
                    dispatch(setLogger('success'))
                } else {
                    dispatch(setLogger('error'))
                }
            })
            } else {
            // если нету - создать
                return axios.post('http://localhost:3001/data', {
                    ...body,
                    id: uuid(),
                    avatar: null,
                    notes: [],
                    meetings: [],
                    videos: [],
                    events: [],
                    selected: false,
                }).then(response => {
                    if (response.status.toString().startsWith('2')) {
                        dispatch(addPerson(response.data));
                        dispatch(resetFields());
                        dispatch(setModal({type: '', closed: true}))
                        dispatch(setLogger('success'))
                    } else {
                        dispatch(setLogger('error'))
                    }
                }).catch()
        }
    }
)

export const deletePerson = createAsyncThunk<
    void,
    string,
    {
        state: RootState,
        dispatch: AppDispatch,
    }
>(
    'personList/deletePerson',
    async (payload, {getState, dispatch}) => {
        return axios.delete(`http://localhost:3001/data/${payload}`)
            .then(response => {
                if (response.status.toString().startsWith('2')) {
                    dispatch(setModal({type: '', closed: true}))
                    const newPersonList = [...getState().personList]
                        .filter(person => {
                            if (person.id === payload) {
                                return false;
                            }
                            return true;
                        })
                    console.log(newPersonList)
                    dispatch(getPersonDetails(newPersonList[0].id))
                    dispatch(setPersons(newPersonList))
                    dispatch(setLogger('success'));
                }
            })
    }
);

export const deleteFewPersons = createAsyncThunk<
    void,
    number,
    {
        state: RootState,
        dispatch: AppDispatch
    }
>(
    'personList/deleteFewPersons',
    async (payload, {dispatch, getState}) => {
        const persons:PersonListItem[] = getState().personList;
        const selectedPersons = persons.filter(person => person.selected)
        Promise.all(
            selectedPersons.map(
                async(person: PersonListItem) => {
                    return axios.delete(`http://localhost:3001/data/${person.id}`)
                        .then(response => response.data)
                        .catch(error => {
                            console.error(error);
                            dispatch(setLogger('error'))
                        })
                })
        )
        .then((values) => {
            dispatch(setLogger('success'));
            const notDeleted = persons.filter(person => !selectedPersons.includes(person));
            console.log(notDeleted)
            dispatch(setPersons(notDeleted));
            dispatch(toggleMode())
            const selectedById = selectedPersons.map(person => person.id);
            if (selectedById.includes(getState().personDetails.id)) {
                dispatch(getPersonDetails(notDeleted[0].id));
            }
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