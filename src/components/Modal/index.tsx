import { useDispatch, useSelector } from "react-redux";
import PersonForm from "./PersonForm";
import { RootState } from "./../../store";
import { setModal } from "./../../store/options";
import { resetFields } from "./../../store/forms";
import PersonDelete from "./PersonDelete";
import NoteCreator from "./NoteCreator";
import NoteDelete from "./NoteDelete";

function Modal() {
    const formType = useSelector((state: RootState) => state.options.form.type);

    const dispatch = useDispatch();

    const handleClickWrapper = (e) => {
        if (e.target.classList.contains('modal-wrapper')) {
            dispatch(setModal({closed: true, type: ''}))
            dispatch(resetFields());
        }
    }

    return (
        <div className="modal-wrapper" onClick={handleClickWrapper}>
            <div className="modal">
                {(formType === 'formNote') && <NoteCreator></NoteCreator>}
                {(formType === 'formPerson') && <PersonForm></PersonForm>}
                {(formType === 'promptDeletePerson') && <PersonDelete></PersonDelete>}
                {(formType === 'promptDeleteNote') && <NoteDelete></NoteDelete>}
            </div>
        </div>
    );
}

export default Modal;