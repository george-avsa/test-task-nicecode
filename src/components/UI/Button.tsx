function Button({children, color, onClick, className=''}) {
    return (
        <button className={`button button--${color}`} onClick={onClick}>{children}</button>
    );
}

export default Button;