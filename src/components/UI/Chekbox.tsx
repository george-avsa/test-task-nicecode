import './styles.sass'

function Checkbox({className="", checked, onChange=()=>{}}) {
    return (
        <div className="checkbox">
            <input checked={checked} onChange={onChange} className={`custom-checkbox ${className}`} type="checkbox" id="color-1"/>
            <label htmlFor="color-1"></label>
        </div>
    );
}

export default Checkbox;