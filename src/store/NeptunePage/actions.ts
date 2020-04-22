import axios from 'axios';
import {
    neptunePageError,
    neptunePageRequest,
    neptunePageSuccess,
} from './actionsCreators';

import { API_URL } from './constants';

export const fetchNeptuneData = () => async (dispatch) => {
    dispatch(neptunePageRequest());
    try {
        const res = await axios.get(API_URL);
        dispatch(neptunePageSuccess({ data: res.data?.collection }));
    } catch (error) {
        neptunePageError({ error });
    }
};
