import axios from 'axios';
import {
    jupiterPageError,
    jupiterPageRequest,
    jupiterPageSuccess,
} from './actionsCreators';

import { API_URL } from './constants';

export const fetchJupiterData = () => async (dispatch) => {
    dispatch(jupiterPageRequest());
    try {
        const res = await axios.get(API_URL);
        dispatch(jupiterPageSuccess({ data: res.data?.collection }));
    } catch (error) {
        jupiterPageError({ error });
    }
};
