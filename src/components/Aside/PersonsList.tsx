import { Person } from "persons";
import PersonItem from "./PersonItem";

function PersonsList({
    persons, 
    activePerson,
    handleClick
}) {
    return (
        <div className="persons-list">
            {persons.map((person:Person) => {
                if (JSON.stringify(person) === JSON.stringify(activePerson)) {
                    return <PersonItem 
                                active 
                                person={person} 
                                key={person.id}
                                handleClick={handleClick}
                            ></PersonItem>
                } else {
                    return <PersonItem 
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