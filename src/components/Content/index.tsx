import PersonPage from '../PersonPage';
import Aside from '../Aside';

function Content() {

    return (
        <div className="wrapper">
            <div className="content">
                <Aside></Aside>
                <PersonPage></PersonPage>
            </div>
        </div>
    );
}

export default Content;