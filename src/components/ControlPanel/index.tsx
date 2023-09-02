import './styles.sass'
import ControlPanelDefault from './ControlPanelDefault';
import ControlPanelSearch from './ControlPanelSearch';


function ControlPanel() {
    return (
        <div className='control-panel'>
            <ControlPanelSearch></ControlPanelSearch>
        </div>
    );
}

export default ControlPanel;