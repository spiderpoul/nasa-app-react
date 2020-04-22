import {
    MOON_PAGE_NASA_ERROR,
    MOON_PAGE_NASA_REQUEST,
    MOON_PAGE_NASA_SUCCESS,
} from './constants';
import { LibraryResponse } from '../../models';

interface PageRequest {
    type: typeof MOON_PAGE_NASA_REQUEST;
}

interface PageSuccess {
    type: typeof MOON_PAGE_NASA_SUCCESS;
    payload: {
        data: LibraryResponse;
    };
}

interface PageError {
    type: typeof MOON_PAGE_NASA_ERROR;
    payload: {
        error: any;
    };
}

export const moonPageRequest = (): PageRequest => ({
    type: MOON_PAGE_NASA_REQUEST,
});

export const moonPageSuccess = ({ data }): PageSuccess => ({
    type: MOON_PAGE_NASA_SUCCESS,
    payload: {
        data,
    },
});

export const moonPageError = ({ error }): PageError => ({
    type: MOON_PAGE_NASA_ERROR,
    payload: {
        error,
    },
});

export type ActionsTypes = PageRequest | PageSuccess | PageError;
