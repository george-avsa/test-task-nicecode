import { useDispatch, useSelector } from "react-redux";
import PersonForm from "./PersonForm";
import { RootState } from "./../../store";
import { setModal } from "./../../store/options";
import { resetFields } from "./../../store/forms";
import PersonDelete from "./PersonDelete";
import NoteCreator from "./NoteCreator";

function Modal() {
    const formType = useSelector((state: RootState) => state.options.form.type);

    const dispatch = useDispatch();

    const handleClickWrapper = (e) => {
        if (e.target.classList.contains('modal-wrapper')) {
            dispatch(setModal({closed: true, type: ''}))
            dispatch(resetFields('formPerson'));
        }
    }

    return (
        <div className="modal-wrapper" onClick={handleClickWrapper}>
            <div className="modal">
                {(formType === 'formNote') && <NoteCreator></NoteCreator>}
                {(formType === 'formPerson') && <PersonForm></PersonForm>}
                {(formType === 'promptDelete') && <PersonDelete></PersonDelete>}
            </div>
        </div>
    );
}

export default Modal;