import Content from './Content';
import Menu from './Menu';
import PersonControls from './PersonControls';
import './styles.sass';

function PersonPage({person}) {
    return (
        <div className="person-page">
            <PersonControls person={person}></PersonControls>
            <Menu />
            <Content></Content>
        </div>
    );
}

export default PersonPage;