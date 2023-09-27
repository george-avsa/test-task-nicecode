import { RootState } from "store";

export const selectPersons = ((state:RootState) => {
    const keklol = [...state.personList];
    const searchValue = state.options.search; 
    if (searchValue.trim()) {
        return keklol.filter((person) => {
            if (person.firstName.includes(searchValue) || person.lastName.includes(searchValue)) {
                return true
            }
            return false
        })
    } else {
        return keklol
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