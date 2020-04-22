import axios from 'axios';
import {
    marsPageError,
    marsPageRequest,
    marsPageSuccess,
} from './actionsCreators';

import { API_URL } from './constants';

export const fetchMarsData = () => async (dispatch) => {
    dispatch(marsPageRequest());
    try {
        const res = await axios.get(API_URL);
        dispatch(marsPageSuccess({ data: res.data?.collection }));
    } catch (error) {
        marsPageError({ error });
    }
};
