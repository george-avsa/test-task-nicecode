import { useDispatch, useSelector } from "react-redux";
import Input from "./../../components/UI/Input";
import store, { RootState } from "store";
import { Fragment } from "react";
import Checkbox from "./../../components/UI/Chekbox";
import { setInputValue } from "./../../store/forms";
import { postPerson } from "./../../store/personList";
import { ThunkAction } from "@reduxjs/toolkit";

function PersonForm() {

    const formValues = useSelector((state: RootState) => state.forms.formPerson);
    const dispatch = useDispatch<typeof store.dispatch>();

    const handleCheck = (e) => {
        const element = e.target
        const id = element.id;
        const type = element.form.name;
        if (id && type) {
            dispatch(setInputValue({
                form: type,
                type: id,
                value: !formValues[id]
            }))
        }
    }

    const handleChange = (e) => {
        const classList = e.target.classList;
        const form = e.target.form.name;
        let type:string;
        if (classList.contains('firstname')) {
            type = 'firstName';
        } else if (classList.contains('lastname')) {
            type = 'lastName';
        }
        if (e.target.value !== '' && e.target.classList.contains('modal__input--error')) {
            e.target.classList.remove('modal__input--error')
        }
        if (type && form) {
            dispatch(setInputValue({
                form,
                type,
                value: e.target.value
            }))
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        let enableToPush = true;
        ['firstName', 'lastName'].forEach(name => {
            if (e.target[name].value === '') {
                e.target[name].classList.add('modal__input--error');
                enableToPush = false;
            }
        })
        if (enableToPush) {
            console.log(e.target)
            console.log(formValues.id)
            dispatch(postPerson(e.target.id))
        }
    }

    return (
        <form className='modal__form' onSubmit={(e) => handleSubmit(e)} name="formPerson" id={formValues.id}>
                    <Input 
                        value={formValues.firstName}
                        handleChange={handleChange} 
                        className='modal__input firstname' 
                        placeholder='Имя'
                        name="firstName"
                        />
                    <Input 
                        value={formValues.lastName} 
                        handleChange={handleChange} 
                        className='modal__input lastname' 
                        placeholder='Фамилия'
                        name="lastName"
                    />
                    <Checkbox checked={formValues.warning} onChange={handleCheck} htmlFor='warning' label="Warning" />
                    <Checkbox checked={formValues.telegram} onChange={handleCheck} htmlFor='telegram' label="Telegram" />
                    <button>Создать</button>
        </form>
    );
}

export default PersonForm;