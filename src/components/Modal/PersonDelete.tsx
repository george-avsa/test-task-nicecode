import Button from "./../../components/UI/Button";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "./../../store";
import { isHtmlElement } from "./../../types";
import { setModal } from "./../../store/options";
import { deletePerson } from "./../../store/personList";
import { useEffect } from "react";
import Delete from "./Delete";

function PersonDelete() {
    const activePerson = useSelector((state: RootState) => state.personDetails);

    return (
        <Delete deleteFunc={deletePerson(activePerson.id)}>
            {` ${activePerson.lastName} ${activePerson.firstName}`}
        </Delete>
    );
}

export default PersonDelete;