import { Person } from "persons";
import PersonItem from "./PersonItem";
import { useEffect } from "react";

function PersonsList({
    persons, 
    activePerson,
    handleClick,
    selectMode,
    searchValue,
}) {

    return (
        <div className="persons-list">
            {persons.map((person:Person) => {
                 if (person.lastName.includes(searchValue) 
                 || person.firstName.includes(searchValue)
                 || !searchValue) {
                     
                    return <PersonItem 
                            selectMode={selectMode}
                            active={person.id === activePerson.id ? true : false} 
                            person={person} 
                            key={person.id}
                            handleClick={handleClick}
                            ></PersonItem>
                 }
            })}
        </div>
    );
}

export default PersonsList;