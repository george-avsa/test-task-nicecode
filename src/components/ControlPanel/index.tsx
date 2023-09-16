import { useSelector } from 'react-redux';
import ControlPanelDefault from './ControlPanelDefault';
import ControlPanelSearch from './ControlPanelSearch';
import { RootState } from 'store';


function ControlPanel() {

    const searchOpened = useSelector((state: RootState) => state.options.searchOpened);

    return (
        <div className='control-panel'>
            {searchOpened
                ? <ControlPanelSearch/>
                : <ControlPanelDefault/>
            }
        </div>
    );
}

export default ControlPanel;