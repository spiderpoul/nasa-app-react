import { API_URL } from './constants';
import { createReduxFetcher } from '../createReduxFetcher';
import { LibraryResponse } from '../../models';
import Axios from 'axios';

export const VenusFetcher = createReduxFetcher<LibraryResponse>({
    fetcher: () => Axios.get(API_URL),
    getState: (state) => state.venusPage,
    mutate: (res) => res.data?.collection,
    prefix: 'VENUS_PAGE',
});

export default VenusFetcher.reducer;
