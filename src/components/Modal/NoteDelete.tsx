import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { deletePerson } from "../../store/personList";
import Delete from "./Delete";
import { deleteNote } from "./../../store/noteThunks";
import { isHtmlElement } from "./../../types";

function NoteDelete() {
    const idToDelete = useSelector((state: RootState) => state.options.form.idToManipulate);

    return (
        <Delete deleteFunc={deleteNote(idToDelete)}>
            {` ${idToDelete}`}
        </Delete>
    );
}

export default NoteDelete;