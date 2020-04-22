import axios from 'axios';
import {
    venusPageError,
    venusPageRequest,
    venusPageSuccess,
} from './actionsCreators';

import { API_URL } from './constants';

export const fetchVenusData = () => async (dispatch) => {
    dispatch(venusPageRequest());
    try {
        const res = await axios.get(API_URL);
        dispatch(venusPageSuccess({ data: res.data?.collection }));
    } catch (error) {
        venusPageError({ error });
    }
};
