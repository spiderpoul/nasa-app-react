import axios from 'axios';
import {
    mercuryPageError,
    mercuryPageRequest,
    mercuryPageSuccess,
} from './actionsCreators';

import { API_URL } from './constants';

export const fetchMercuryData = () => async (dispatch) => {
    dispatch(mercuryPageRequest());
    try {
        const res = await axios.get(API_URL);
        dispatch(mercuryPageSuccess({ data: res.data?.collection }));
    } catch (error) {
        mercuryPageError({ error });
    }
};
