import ControlPanel from '../ControlPanel';
import PersonsList from './PersonsList';
import ControlSelection from './../ControlPanel/ControlSelection';

function Aside() {

    return (
        <aside>
            <ControlPanel/>
            <ControlSelection></ControlSelection>
            <PersonsList></PersonsList>
        </aside>
    );
}

export default Aside;