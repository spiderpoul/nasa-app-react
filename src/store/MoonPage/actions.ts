import axios from 'axios';
import {
    moonPageError,
    moonPageRequest,
    moonPageSuccess,
} from './actionsCreators';

import { API_URL } from './constants';

export const fetchMoonData = () => async (dispatch) => {
    dispatch(moonPageRequest());
    try {
        const res = await axios.get(API_URL);
        dispatch(moonPageSuccess({ data: res.data?.collection }));
    } catch (error) {
        moonPageError({ error });
    }
};
