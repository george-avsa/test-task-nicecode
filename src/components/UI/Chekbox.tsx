import './styles.sass'

function Checkbox({className="", checked, onChange=()=>{}, htmlFor}) {
    return (
        <div className="checkbox">
            <input 
                checked={checked} 
                onChange={onChange} 
                className={`custom-checkbox ${className}`} 
                type="checkbox" 
                id={htmlFor}
            />
            <label htmlFor={htmlFor}></label>
        </div>
    );
}

export default Checkbox;