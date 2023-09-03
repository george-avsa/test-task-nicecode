import { Person } from "persons";
import PersonItem from "./PersonItem";

function PersonsList({
    persons, 
    activePerson,
    handleClick,
    selectMode,
}) {
    return (
        <div className="persons-list">
            {persons.map((person:Person) => (
                <PersonItem 
                    selectMode={selectMode}
                    active={person.id === activePerson.id ? true : false} 
                    person={person} 
                    key={person.id}
                    handleClick={handleClick}
                ></PersonItem>
            ))}
        </div>
    );
}

export default PersonsList;