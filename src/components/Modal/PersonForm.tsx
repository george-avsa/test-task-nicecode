import { useDispatch, useSelector } from "react-redux";
import Input from "./../../components/UI/Input";
import store, { RootState } from "store";
import { Fragment, useEffect, useState } from "react";
import Checkbox from "./../../components/UI/Chekbox";
import { setInputValue } from "./../../store/forms";
import { postPerson } from "./../../store/personList";
import { ThunkAction } from "@reduxjs/toolkit";
import Button from "./../UI/Button";

function PersonForm() {
    const formValues = useSelector((state: RootState) => state.forms.formPerson);
    const dispatch = useDispatch<typeof store.dispatch>();

    // Название модального окна
    // не стал его вносить в общий стейт, очень локальная штука
    const [type, setType] = useState('');

    // при монтировании определяет название формы
    useEffect(() => {
        if (!formValues.lastName && !formValues.firstName) {
            setType('creation')
        } else {
            setType('editing')
        }
    }, [])
    

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
            dispatch(postPerson(e.target.id))
        }
    }

    return (
        <form className='modal__form' onSubmit={(e) => handleSubmit(e)} name="formPerson" id={formValues.id}>
            <h1 className="modal__title">{type === 'editing' ? 'Изменение' : 'Создание'}</h1>
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
            <Button color="grey" className="dropdown__item" onClick={(e) => {}}>
                {type === 'editing' ? 'Изменить' : 'Сохранить'}
            </Button>
        </form>
    );
}

export default PersonForm;