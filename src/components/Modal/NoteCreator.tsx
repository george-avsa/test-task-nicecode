import Textarea from "./../UI/Textarea";
import Input from "./../UI/Input";
import Button from "./../UI/Button";
import { isHtmlElement } from "./../../types";
import { useDispatch, useSelector } from "react-redux";
import { setInputValue } from "./../../store/forms";
import { RootState } from "./../../store";

function NoteCreator() { 

    const formFields = useSelector((state: RootState) => state.forms.formNote);

    const dispatch = useDispatch();

    const handleSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
        if (isHtmlElement(e.target)) {
            e.preventDefault();
        }
    }

    const handleChangeNote = (e: React.ChangeEvent<HTMLTextAreaElement> | React.ChangeEvent<HTMLInputElement>) => {
        const changedElement = e.target;
        if (isHtmlElement(changedElement)) {
            const form = changedElement?.closest('form');
            dispatch(setInputValue({
                form: form.id, 
                type: changedElement.name, 
                value: changedElement.value
            }))
        }
    }

    return (
        <form className="modal__note" id="formNote" onSubmit={handleSubmitForm}>
            <Input
                value={new Date(formFields.date).toISOString().split('T')[0]}
                handleChange={handleChangeNote}
                className='input__note'
                placeholder='Название заметки'
                name="date"
                type='date'
            ></Input>
            <Textarea 
                value={formFields.text}
                name="text"
                onChange={handleChangeNote}
                placeholder='Заметка'
                max={300}
            ></Textarea>
            <Button color="grey" onClick={(e) => {}}>Создать</Button>
        </form>
    );
}

export default NoteCreator;