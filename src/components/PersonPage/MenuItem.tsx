function MenuItem({children, active=false}) {
    return (
        <span className={`menu__item ${active ? 'menu__item--active' : ''}`}>
            {children}
        </span>
    );
}

export default MenuItem;