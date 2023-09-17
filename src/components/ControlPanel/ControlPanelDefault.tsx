import Icon from '../UI/Icon';
import {ReactComponent as SearchIcon} from './../../assets/search.svg';
import {ReactComponent as FilterIcon} from './../../assets/filter.svg';
import {ReactComponent as PlusIcon} from './../../assets/plus.svg';
import { useDispatch } from 'react-redux';
import { setModal, toggleSearchVisibility } from './../../store/options';

function ControlPanelDefault() {

    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(setModal({closed: false, type: 'formPerson'}));
    }

    return (
        <>
            <div className='control-panel__grow' onClick={() => dispatch(toggleSearchVisibility())}>
                <Icon><SearchIcon /></Icon>
            </div>
            <Icon><FilterIcon /></Icon>
            <Icon onClick={() => handleClick()}><PlusIcon /></Icon>
        </>
    );
}

export default ControlPanelDefault;