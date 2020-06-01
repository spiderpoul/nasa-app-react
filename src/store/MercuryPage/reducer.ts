import { API_URL } from './constants';
import { createReduxFetcher } from '../createReduxFetcher';
import { LibraryResponse } from '../../models';
import Axios from 'axios';

export const MercuryFetcher = createReduxFetcher<LibraryResponse>({
    fetcher: () => Axios.get(API_URL),
    getState: (state) => state.mercuryPage,
    mutate: (res) => res.data?.collection,
    prefix: 'MERCURY_PAGE',
});

export default MercuryFetcher.reducer;
