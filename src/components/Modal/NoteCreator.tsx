import Textarea from "./../UI/Textarea";
import Input from "./../UI/Input";
import Button from "./../UI/Button";
import { isHtmlElement } from "./../../types";
import { useDispatch, useSelector } from "react-redux";
import { setInputValue } from "./../../store/forms";
import { AppDispatch, RootState } from "./../../store";
import { useEffect, useState } from "react";
import { postNote } from "./../../store/noteThunks";

function NoteCreator() { 

    const formFields = useSelector((state: RootState) => state.forms.formNote);

    const [modalTitle, setModalTitle] = useState('');
    useEffect(() => {
        if (formFields.text) {
            setModalTitle('Изменение заметки');
        } else {
            setModalTitle('Создание заметки');
        }
    }, [])

    const dispatch = useDispatch<AppDispatch>();

    const handleSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
        if (isHtmlElement(e.target)) {
            e.preventDefault();
            dispatch(postNote(e.target.id))
        }
    }

    const handleChangeNote = (e: React.ChangeEvent<HTMLTextAreaElement> | React.ChangeEvent<HTMLInputElement>) => {
        const changedElement = e.target;
        if (isHtmlElement(changedElement)) {
            const form = changedElement?.closest('form');
            dispatch(setInputValue({
                form: form.name, 
                type: changedElement.name, 
                value: changedElement.value
            }))
        }
    }

    return (
        <form className="modal__note" name="formNote" onSubmit={handleSubmitForm} id={formFields.id}>
            <h1 className="modal__title">{modalTitle}</h1>
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