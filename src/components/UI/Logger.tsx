import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "store";
import { setLogger } from "./../../store/options";

function Logger() {
    const logger = useSelector((state:RootState) => state.options.logger);

    const dispatch = useDispatch();

    useEffect(() => {
        let timerId = setTimeout(() => {
            dispatch(setLogger(''));
        }, 2000);

        return () => {
            clearTimeout(timerId);
        }
    }, [logger]);


    return !!logger ? (
        <div className={`logger logger--${logger}`}>
            {logger === 'success' ? 'Успешно' : 'Произошла ошибка'}
        </div>
    ) : null;
}

export default Logger;