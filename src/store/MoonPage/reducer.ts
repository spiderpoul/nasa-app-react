import { API_URL } from './constants';
import { createReduxFetcher } from '../createReduxFetcher';
import { LibraryResponse } from '../../models';
import Axios from 'axios';

export const MoonFetcher = createReduxFetcher<LibraryResponse>({
    fetcher: () => Axios.get(API_URL),
    getState: (state) => state.moonPage,
    mutate: (res) => res.data?.collection,
    prefix: 'MOON_PAGE',
});

export default MoonFetcher.reducer;
