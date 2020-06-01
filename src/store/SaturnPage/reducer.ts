import { API_URL } from './constants';
import { createReduxFetcher } from '../createReduxFetcher';
import { LibraryResponse } from '../../models';
import Axios from 'axios';

export const SaturnFetcher = createReduxFetcher<LibraryResponse>({
    fetcher: () => Axios.get(API_URL),
    getState: (state) => state.saturnPage,
    mutate: (res) => res.data?.collection,
    prefix: 'SATURN_PAGE',
});

export default SaturnFetcher.reducer;
