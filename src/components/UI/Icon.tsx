function Icon({children, small=true, avatar=false, className="", onClick=()=>{}, dropdownRef=null}) {
    return (
        <div className={`
            icon
            ${avatar ? 'icon--avatar' : ''} 
            ${small ? 'icon--small' : ''} 
            ${className}`}
            onClick={onClick}
            ref={dropdownRef}
        >
            {children}
        </div>
    );
}

export default Icon;