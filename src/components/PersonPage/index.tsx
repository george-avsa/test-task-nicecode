import PersonControls from './PersonControls';
import './styles.sass';

function PersonPage({image}) {
    return (
        <div className="person-page">
            <PersonControls image></PersonControls>
        </div>
    );
}

export default PersonPage;