import axios from 'axios';
import {
    uranusPageError,
    uranusPageRequest,
    uranusPageSuccess,
} from './actionsCreators';

import { API_URL } from './constants';

export const fetchUranusData = () => async (dispatch) => {
    dispatch(uranusPageRequest());
    try {
        const res = await axios.get(API_URL);
        dispatch(uranusPageSuccess({ data: res.data?.collection }));
    } catch (error) {
        uranusPageError({ error });
    }
};
