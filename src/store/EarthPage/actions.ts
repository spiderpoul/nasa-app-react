import axios from 'axios';
import {
    earthPageError,
    earthPageRequest,
    earthPageSuccess,
} from './actionsCreators';

import { API_URL } from './constants';

export const fetchEarthData = () => async (dispatch) => {
    dispatch(earthPageRequest());
    try {
        const res = await axios.get(API_URL);
        dispatch(earthPageSuccess({ data: res.data?.collection }));
    } catch (error) {
        earthPageError({ error });
    }
};
