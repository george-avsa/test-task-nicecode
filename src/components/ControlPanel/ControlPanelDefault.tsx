import Icon from '../UI/Icon';
import {ReactComponent as SearchIcon} from './../../assets/search.svg';
import {ReactComponent as FilterIcon} from './../../assets/filter.svg';
import {ReactComponent as PlusIcon} from './../../assets/plus.svg';
import { useDispatch } from 'react-redux';
import { toggleSearchVisibility } from './../../store/options';

function ControlPanelDefault() {
    const dispatch = useDispatch();
    return (
        <>
            <div className='control-panel__grow' onClick={() => dispatch(toggleSearchVisibility())}>
                <Icon><SearchIcon /></Icon>
            </div>
            <Icon><FilterIcon /></Icon>
            <Icon><PlusIcon /></Icon>
        </>
    );
}

export default ControlPanelDefault;