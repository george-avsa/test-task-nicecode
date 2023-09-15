import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { Person } from "persons";

const initialState:Person | {} = {};

export const getPersonDetails = createAsyncThunk(
    'personDetails/getPersonDetails',
    async (payload, {dispatch}) => {
        return axios.get(`http://localhost:3001/data?id=${payload}`)
            .then(response => {
                dispatch(setPersonDetails(response.data))
            })
            .catch()
    }
)

export const personDetails = createSlice({
    name: 'personDetails',
    initialState,
    reducers: {
        setPersonDetails: (state, {payload}) => {
            return state
        }
    }
})

export const {setPersonDetails} = personDetails.actions;