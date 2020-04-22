import {
    SEARCH_PAGE_NASA_ERROR,
    SEARCH_PAGE_NASA_REQUEST,
    SEARCH_PAGE_NASA_SUCCESS,
    SEARCH_PAGE_SET_SEARCH,
} from './constants';
import { LibraryResponse } from '../../models';

interface PageRequest {
    type: typeof SEARCH_PAGE_NASA_REQUEST;
}

interface PageSuccess {
    type: typeof SEARCH_PAGE_NASA_SUCCESS;
    payload: {
        data: LibraryResponse;
    };
}

interface SetSearch {
    type: typeof SEARCH_PAGE_SET_SEARCH;
    payload: {
        search: string;
    };
}

interface PageError {
    type: typeof SEARCH_PAGE_NASA_ERROR;
    payload: {
        error: any;
    };
}

export const searchPageRequest = (): PageRequest => ({
    type: SEARCH_PAGE_NASA_REQUEST,
});

export const searchPageSuccess = ({ data }): PageSuccess => ({
    type: SEARCH_PAGE_NASA_SUCCESS,
    payload: {
        data,
    },
});

export const setSearch = ({ search }: { search: string }): SetSearch => ({
    type: SEARCH_PAGE_SET_SEARCH,
    payload: {
        search,
    },
});

export const searchPageError = ({ error }): PageError => ({
    type: SEARCH_PAGE_NASA_ERROR,
    payload: {
        error,
    },
});

export type ActionsTypes = PageRequest | PageSuccess | PageError | SetSearch;
