import {
    PLUTO_PAGE_NASA_ERROR,
    PLUTO_PAGE_NASA_REQUEST,
    PLUTO_PAGE_NASA_SUCCESS,
} from './constants';
import { LibraryResponse } from '../../models';

interface PageRequest {
    type: typeof PLUTO_PAGE_NASA_REQUEST;
}

interface PageSuccess {
    type: typeof PLUTO_PAGE_NASA_SUCCESS;
    payload: {
        data: LibraryResponse;
    };
}

interface PageError {
    type: typeof PLUTO_PAGE_NASA_ERROR;
    payload: {
        error: any;
    };
}

export const plutoPageRequest = (): PageRequest => ({
    type: PLUTO_PAGE_NASA_REQUEST,
});

export const plutoPageSuccess = ({ data }): PageSuccess => ({
    type: PLUTO_PAGE_NASA_SUCCESS,
    payload: {
        data,
    },
});

export const plutoPageError = ({ error }): PageError => ({
    type: PLUTO_PAGE_NASA_ERROR,
    payload: {
        error,
    },
});

export type ActionsTypes = PageRequest | PageSuccess | PageError;
