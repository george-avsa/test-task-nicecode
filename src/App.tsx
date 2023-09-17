import Header from "./components/Header";
import Content from "./components/Content";
import { useEffect } from "react";
import { Provider, useDispatch, useSelector } from "react-redux";
import store, { State } from "./store";
import { getPesonsList } from "./store/personList";
import { getPersonDetails } from "./store/personDetails";
import Modal from "./components/Modal";

function App() {

    const dispatch = useDispatch<typeof store.dispatch>();
    const personList = useSelector((state: State) => state.personList);
    const formClosed = useSelector((state: State) => state.options.form.closed);

    useEffect(() => {
        dispatch(getPesonsList());
    }, [])

    useEffect(() => {
        dispatch(getPersonDetails('denis1'))
    }, [personList])

    return (
        <>
            <Header></Header>
            <Content></Content>
            {!formClosed && <Modal></Modal>}
        </>
    );
}

export default App;