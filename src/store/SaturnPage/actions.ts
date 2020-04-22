import axios from 'axios';
import {
    saturnPageError,
    saturnPageRequest,
    saturnPageSuccess,
} from './actionsCreators';

import { API_URL } from './constants';

export const fetchSaturnData = () => async (dispatch) => {
    dispatch(saturnPageRequest());
    try {
        const res = await axios.get(API_URL);
        dispatch(saturnPageSuccess({ data: res.data?.collection }));
    } catch (error) {
        saturnPageError({ error });
    }
};
