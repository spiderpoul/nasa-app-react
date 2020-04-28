import { API_URL } from './constants';
import { createReduxFetcher } from '../createReduxFetcher';
import { LibraryResponse } from '../../models';
import Axios from 'axios';

export const EarthFetcher = createReduxFetcher<LibraryResponse>({
    fetcher: () => Axios.get(API_URL),
    getState: (state) => state.earthPage,
    mutate: (res) => res.data?.collection,
    prefix: 'EARTH_PAGE',
});

export default EarthFetcher.reducer;
