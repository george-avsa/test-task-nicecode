import Icon from '../UI/Icon';
import {ReactComponent as SearchIcon} from './../../assets/search.svg';
import {ReactComponent as CrossIcon} from './../../assets/cross.svg';

function ControlPanelSearch() {
    return (
        <>
            <SearchIcon className='search--icon' />
            <input className='search' type="text" />
            <Icon><CrossIcon /></Icon>
        </>
    );
}

export default ControlPanelSearch;