function Icon({children, small=true, avatar=false, className=""}) {
    return (
        <button className={`
            icon
            ${avatar ? 'icon--avatar' : ''} 
            ${small ? 'icon--small' : ''} 
            ${className}`}
        >
            {children}
        </button>
    );
}

export default Icon;