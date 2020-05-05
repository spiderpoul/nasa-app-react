import { API_URL } from './constants';
import { createReduxFetcher } from '../createReduxFetcher';
import { LibraryResponse } from '../../models';
import Axios from 'axios';

export const MarsFetcher = createReduxFetcher<LibraryResponse>({
    fetcher: () => Axios.get(API_URL),
    getState: (state) => state.marsPage,
    mutate: (res) => res.data?.collection,
    prefix: 'MARS_PAGE',
});

export default MarsFetcher.reducer;
