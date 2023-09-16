import { RootState } from "store";

export const selectPersons = ((state:RootState) => {
    const searchValue = state.options.search; 
    if (searchValue) {
        return state.personList.filter((person) => {
            if (searchValue.includes(person.firstName) || searchValue.includes(person.lastName)) {
                return true
            }
        })
    } else {
        return state.personList
    }
});

export const countSearched = ((state:RootState) => {
    const searchValue = state.options.search; 
    if (searchValue) {
        return state.personList.filter((person) => {
            if (searchValue.includes(person.firstName) || searchValue.includes(person.lastName)) {
                return true
            }
        }).length
    } else {
        return state.personList.length
    }
});