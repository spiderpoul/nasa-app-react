import { API_URL } from './constants';
import { createReduxFetcher } from '../createReduxFetcher';
import { LibraryResponse } from '../../models';
import Axios from 'axios';

export const JupiterFetcher = createReduxFetcher<LibraryResponse>({
    fetcher: () => Axios.get(API_URL),
    getState: (state) => state.jupiterPage,
    mutate: (res) => res.data?.collection,
    prefix: 'JUPITER_PAGE',
});

export default JupiterFetcher.reducer;
