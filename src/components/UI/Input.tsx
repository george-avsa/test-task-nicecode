function Input({
    value,
    handleChange,
    className='',
    placeholder='',
    name='',
    type='text'
}) {
    return (
        <input name={name} className={`search ${className}`} type={type} value={value} onChange={handleChange} placeholder={placeholder} />
    );
}

export default Input;