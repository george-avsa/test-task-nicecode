import { isHtmlElement } from "types";

function MenuItem({children, active=false, handleClickMenu=(e)=>{}}) {

    return (
        <span className={`menu__item ${active ? 'menu__item--active' : ''}`} onClick={(e) => handleClickMenu(e)}>
            {children}
        </span>
    );
}

export default MenuItem;