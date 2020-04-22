import {
    EARTH_PAGE_NASA_ERROR,
    EARTH_PAGE_NASA_REQUEST,
    EARTH_PAGE_NASA_SUCCESS,
} from './constants';
import { LibraryResponse } from '../../models';

interface PageRequest {
    type: typeof EARTH_PAGE_NASA_REQUEST;
}

interface PageSuccess {
    type: typeof EARTH_PAGE_NASA_SUCCESS;
    payload: {
        data: LibraryResponse;
    };
}

interface PageError {
    type: typeof EARTH_PAGE_NASA_ERROR;
    payload: {
        error: any;
    };
}

export const earthPageRequest = (): PageRequest => ({
    type: EARTH_PAGE_NASA_REQUEST,
});

export const earthPageSuccess = ({ data }): PageSuccess => ({
    type: EARTH_PAGE_NASA_SUCCESS,
    payload: {
        data,
    },
});

export const earthPageError = ({ error }): PageError => ({
    type: EARTH_PAGE_NASA_ERROR,
    payload: {
        error,
    },
});

export type ActionsTypes = PageRequest | PageSuccess | PageError;
