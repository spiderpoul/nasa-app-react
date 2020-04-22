import {
    MARS_PAGE_NASA_ERROR,
    MARS_PAGE_NASA_REQUEST,
    MARS_PAGE_NASA_SUCCESS,
} from './constants';
import { LibraryResponse } from '../../models';

interface PageRequest {
    type: typeof MARS_PAGE_NASA_REQUEST;
}

interface PageSuccess {
    type: typeof MARS_PAGE_NASA_SUCCESS;
    payload: {
        data: LibraryResponse;
    };
}

interface PageError {
    type: typeof MARS_PAGE_NASA_ERROR;
    payload: {
        error: any;
    };
}

export const marsPageRequest = (): PageRequest => ({
    type: MARS_PAGE_NASA_REQUEST,
});

export const marsPageSuccess = ({ data }): PageSuccess => ({
    type: MARS_PAGE_NASA_SUCCESS,
    payload: {
        data,
    },
});

export const marsPageError = ({ error }): PageError => ({
    type: MARS_PAGE_NASA_ERROR,
    payload: {
        error,
    },
});

export type ActionsTypes = PageRequest | PageSuccess | PageError;
