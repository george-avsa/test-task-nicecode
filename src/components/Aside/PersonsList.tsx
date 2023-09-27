import { Person } from "persons";
import PersonItem from "./PersonItem";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectPersons } from "./../../store/selectors";
import { RootState } from "store";

function PersonsList() {

    const activePersonId = useSelector((state: RootState) => state.personDetails.id);
    const persons = useSelector((state: RootState) => state.personList);
    const searchValue = useSelector((state: RootState) => state.options.search);

    return (
        <div className="persons-list">
            {persons.map((person:Person) => {
                 if (person.lastName.includes(searchValue) 
                 || person.firstName.includes(searchValue)
                 || !searchValue) {
                     
                    return <PersonItem 
                            active={person.id === activePersonId ? true : false} 
                            person={person} 
                            key={person.id}
                            ></PersonItem>
                 }
            })}
        </div>
    );
}

export default PersonsList;