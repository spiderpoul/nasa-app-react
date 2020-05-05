import { API_URL } from './constants';
import { createReduxFetcher } from '../createReduxFetcher';
import { LibraryResponse } from '../../models';
import Axios from 'axios';

export const NeptuneFetcher = createReduxFetcher<LibraryResponse>({
    fetcher: () => Axios.get(API_URL),
    getState: (state) => state.neptunePage,
    mutate: (res) => res.data?.collection,
    prefix: 'NEPTUNE_PAGE',
});

export default NeptuneFetcher.reducer;
