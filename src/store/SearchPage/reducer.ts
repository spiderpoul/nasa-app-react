import { API_URL } from './constants';
import { createReduxFetcher } from '../createReduxFetcher';
import { LibraryResponse, SearchFiltersState } from '../../models';
import Axios from 'axios';
import { combineReducers } from 'redux';
import { buildReducer } from 'redux-blaze';

export const SearchFetcher = createReduxFetcher<LibraryResponse>({
    fetcher: (search) => Axios.get(`${API_URL}?q=${search}`),
    getState: (state) => state.searchPage.model,
    mutate: (res) => res?.data?.collection,
    prefix: 'SEARCH_PAGE',
});

const SearchFiltersInitialState: SearchFiltersState = {
    search: '',
};

export const SearchPageFilters = buildReducer(
    SearchFiltersInitialState,
    {
        setSearch: (a: { search: string }) => (s) => ({
            ...s,
            search: a.search,
        }),
    },
    { prefix: 'SEARCH_PAGE_FILTERS' }
);

export default combineReducers({
    filters: SearchPageFilters.reducer,
    model: SearchFetcher.reducer,
});
