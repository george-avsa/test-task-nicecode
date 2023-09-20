import PersonPage from '../PersonPage';
import Aside from '../Aside';
import Logger from './../../components/UI/Logger';

function Content() {

    return (
        <div className="wrapper">
            <div className="content">
                <Aside></Aside>
                <PersonPage></PersonPage>
                <Logger></Logger>
            </div>
        </div>
    );
}

export default Content;