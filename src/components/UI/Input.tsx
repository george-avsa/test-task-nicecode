function Input({
    value,
    handleChange,
    className='',
    placeholder='',
    name=''
}) {
    return (
        <input name={name} className={`search ${className}`} type="text" value={value} onChange={handleChange} placeholder={placeholder} />
    );
}

export default Input;