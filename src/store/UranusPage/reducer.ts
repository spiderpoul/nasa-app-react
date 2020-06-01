import { API_URL } from './constants';
import { createReduxFetcher } from '../createReduxFetcher';
import { LibraryResponse } from '../../models';
import Axios from 'axios';

export const UranusFetcher = createReduxFetcher<LibraryResponse>({
    fetcher: () => Axios.get(API_URL),
    getState: (state) => state.uranusPage,
    mutate: (res) => res.data?.collection,
    prefix: 'URANUS_PAGE',
});

export default UranusFetcher.reducer;
