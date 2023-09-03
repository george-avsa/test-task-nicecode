function Icon({children, small=true, avatar=false, className="", onClick=()=>{}}) {
    return (
        <div className={`
            icon
            ${avatar ? 'icon--avatar' : ''} 
            ${small ? 'icon--small' : ''} 
            ${className}`}
            onClick={onClick}
        >
            {children}
        </div>
    );
}

export default Icon;