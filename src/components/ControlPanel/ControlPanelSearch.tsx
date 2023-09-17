import Icon from '../UI/Icon';
import {ReactComponent as SearchIcon} from './../../assets/search.svg';
import {ReactComponent as CrossIcon} from './../../assets/cross.svg';
import { isHtmlElement } from './../../types';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store';
import { setSearch, toggleSearchVisibility } from './../../store/options';
import Input from './../../components/UI/Input';

function ControlPanelSearch() {

    const searchValue = useSelector((state: RootState) => state.options.search);
    const dispatch = useDispatch();

    const handleClickSearch = () => {
        dispatch(toggleSearchVisibility());
        dispatch(setSearch(''));
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (isHtmlElement(e.target)) {
            dispatch(setSearch(e.target.value));
        }
    }

    return (
        <>
            <SearchIcon className='search--icon'/>
            <Input value={searchValue} handleChange={handleChange} />
            <Icon  onClick={handleClickSearch}><CrossIcon /></Icon>
        </>
    );
}

export default ControlPanelSearch;