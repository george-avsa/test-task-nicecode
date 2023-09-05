import Icon from '../UI/Icon';
import {ReactComponent as SearchIcon} from './../../assets/search.svg';
import {ReactComponent as FilterIcon} from './../../assets/filter.svg';
import {ReactComponent as PlusIcon} from './../../assets/plus.svg';

function ControlPanelDefault({setSearchOpened}) {
    return (
        <>
            <div className='control-panel__grow' onClick={() => setSearchOpened(true)}>
                <Icon><SearchIcon /></Icon>
            </div>
            <Icon><FilterIcon /></Icon>
            <Icon><PlusIcon /></Icon>
        </>
    );
}

export default ControlPanelDefault;