import axios from 'axios';
import {
    plutoPageError,
    plutoPageRequest,
    plutoPageSuccess,
} from './actionsCreators';

import { API_URL } from './constants';

export const fetchPlutoData = () => async (dispatch) => {
    dispatch(plutoPageRequest());
    try {
        const res = await axios.get(API_URL);
        dispatch(plutoPageSuccess({ data: res.data?.collection }));
    } catch (error) {
        plutoPageError({ error });
    }
};
