import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { Person } from "persons";

const initialState:Person = {
    id: '',
    firstName: '',
    lastName: '',
    avatar: '',
    telegram: false,
    warning: false,
    selected: false,
    gender: 'male',
    age: 0,
    notes: [],
    meetings: [],
    videos: [],
    events: [],
};

export const getPersonDetails = createAsyncThunk(
    'personDetails/getPersonDetails',
    async (payload:string, {dispatch}) => {
        return axios.get(`http://localhost:3001/data?id=${payload}`)
            .then(response => {
                console.log(response.data[0])
                dispatch(setPersonDetails(response.data[0]))
            })
            .catch()
    }
)

export const personDetails = createSlice({
    name: 'personDetails',
    initialState,
    reducers: {
        setPersonDetails: (state, {payload}) => {
            return payload
        }
    }
})

export const {setPersonDetails} = personDetails.actions;