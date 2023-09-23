function PersonDropdown({handleClickChange, handleClickDelete}) {

    

    return (
        <div className="person-page__dropdown">
            <span className="dropdown__item" onClick={handleClickChange}>
                Изменить
            </span>
            <span className="dropdown__item" onClick={handleClickDelete}>
                Удалить
            </span>
        </div>
    );
}

export default PersonDropdown;