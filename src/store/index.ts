import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { personList } from './personList';
import { personDetails } from './personDetails';
import { OptionsState, optionsSlice } from './options';
import { Person } from 'persons';
import { formsSlice } from './forms';
// import { personList } from './../personList';

export interface State {
  options: OptionsState,
  personList: Person[],
  personDetails: Person,
}

const rootReducer = combineReducers({
  personList: personList.reducer,
  personDetails: personDetails.reducer,
  options: optionsSlice.reducer,
  forms: formsSlice.reducer,
})

const store = configureStore({
  reducer: rootReducer,
  devTools:true,
})


export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>

export default store