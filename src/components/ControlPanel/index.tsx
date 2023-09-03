import './styles.sass'
import ControlPanelDefault from './ControlPanelDefault';
import ControlPanelSearch from './ControlPanelSearch';
import { useMemo, useState } from 'react';


function ControlPanel({
    setPersons,
    searchValue,
    setSearchValue,
}) {

    const [searchOpened, setSearchOpened] = useState<boolean>(false);

    return (
        <div className='control-panel'>
            {searchOpened
                ? <ControlPanelSearch 
                    setSearchOpened={setSearchOpened}
                    setPersons={setPersons}
                    searchValue={searchValue}
                    setSearchValue={setSearchValue}
                />
                : <ControlPanelDefault
                    setSearchOpened={setSearchOpened}
                />
            }
        </div>
    );
}

export default ControlPanel;