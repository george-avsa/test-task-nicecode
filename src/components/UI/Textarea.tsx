function Textarea({value, onChange, max, placeholder, name=''}) {

    return (
        <div className="textarea__wrapper">
            <textarea className="textarea" placeholder={placeholder} onChange={onChange} value={value} name={name} />
            <span className={`textarea__counter ${value.length > max ? 'textarea__counter--error' : ''}`}>{value.length}/{max}</span>
        </div>
    );
}

export default Textarea;