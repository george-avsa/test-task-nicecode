import PersonPage from './../PersonPage';
import Aside from './../Aside';
import './styles.sass';

function Content() {
    return (
        <div className="wrapper">
            <div className="content">
                <Aside></Aside>
                <PersonPage image></PersonPage>
            </div>
        </div>
    );
}

export default Content;