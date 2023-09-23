import { createAsyncThunk } from "@reduxjs/toolkit";
import { AppDispatch, RootState } from "./../store";
import { resetFields } from "./forms";
import axios from "axios";
import { setLogger, setModal } from "./options";
import {v4 as uuid} from 'uuid';
import { setPersonDetails } from "./personDetails";
import { Person } from "persons";
import { dateToFormat } from "fetures/dateToFomat";

export const postNote = createAsyncThunk<
    void,
    string,
    {
        dispatch: AppDispatch
        state: RootState
    }
>(
    'personList/postNote',
    async (payload, {getState, dispatch}) => {
        const state = getState();
        const editedNote = {...state.forms.formNote};
        const selectedPerson = state.personDetails;
        const body:Person = {...selectedPerson};
        if (payload) {
            body.notes = selectedPerson.notes.map(note => {
                if (note.id === payload) {
                    return editedNote
                }
                return note
            })
        } else {
            body.notes = [...body.notes, {...editedNote, id: uuid()}];
        }

        return axios.patch(`http://localhost:3001/data/${selectedPerson.id}`, body)
        .then(response => {
            dispatch(resetFields());
            dispatch(setModal({type: '', closed: true}))
            if (response.status.toString().startsWith('2')) {
                dispatch(setPersonDetails({...body}))
                dispatch(setLogger('success'))
            } else {
                dispatch(setLogger('error'))
            }
        })
    }
)

export const deleteNote = createAsyncThunk<
    void,
    string,
    {
        dispatch: AppDispatch
        state: RootState
    }
>(
    'personList/deleteNote',
    async (payload, {getState, dispatch}) => {
        const state = getState();
        const selectedPerson = state.personDetails;
        const body = {...selectedPerson, notes: selectedPerson.notes.filter(note => {
            if (note.id !== payload) {
                return true
            } 
            return false
        })};

        return axios.patch(`http://localhost:3001/data/${selectedPerson.id}`, body)
        .then(response => {
            dispatch(resetFields());
            dispatch(setModal({type: '', closed: true}))
            if (response.status.toString().startsWith('2')) {
                dispatch(setPersonDetails({...body}))
                dispatch(setLogger('success'))
            } else {
                dispatch(setLogger('error'))
            }
        })
    }
)