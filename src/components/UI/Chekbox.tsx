function Checkbox({className="", checked, onChange=(e)=>{}, htmlFor, label=''}) {
    return (
        <div className="checkbox">
            <input 
                checked={checked} 
                onChange={onChange} 
                className={`custom-checkbox ${className}`} 
                type="checkbox" 
                id={htmlFor}
            />
            <label htmlFor={htmlFor}>{label}</label>
        </div>
    );
}

export default Checkbox;