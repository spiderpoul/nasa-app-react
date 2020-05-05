import { API_URL } from './constants';
import { createReduxFetcher } from '../createReduxFetcher';
import { LibraryResponse } from '../../models';
import Axios from 'axios';

export const PlutoFetcher = createReduxFetcher<LibraryResponse>({
    fetcher: () => Axios.get(API_URL),
    getState: (state) => state.plutoPage,
    mutate: (res) => res.data?.collection,
    prefix: 'PLUTO_PAGE',
});

export default PlutoFetcher.reducer;
