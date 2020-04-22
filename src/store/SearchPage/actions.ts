import axios from 'axios';
import {
    searchPageError,
    searchPageRequest,
    searchPageSuccess,
} from './actionsCreators';

import { API_URL } from './constants';

export const fetchSearchData = ({ search }: { search: string }) => async (
    dispatch
) => {
    dispatch(searchPageRequest());
    try {
        const res = await axios.get(`${API_URL}?q=${search}`);
        dispatch(searchPageSuccess({ data: res.data?.collection }));
    } catch (error) {
        searchPageError({ error });
    }
};
