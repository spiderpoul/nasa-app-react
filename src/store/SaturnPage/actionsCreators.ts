import {
    SATURN_PAGE_NASA_ERROR,
    SATURN_PAGE_NASA_REQUEST,
    SATURN_PAGE_NASA_SUCCESS,
} from './constants';
import { LibraryResponse } from '../../models';

interface PageRequest {
    type: typeof SATURN_PAGE_NASA_REQUEST;
}

interface PageSuccess {
    type: typeof SATURN_PAGE_NASA_SUCCESS;
    payload: {
        data: LibraryResponse;
    };
}

interface PageError {
    type: typeof SATURN_PAGE_NASA_ERROR;
    payload: {
        error: any;
    };
}

export const saturnPageRequest = (): PageRequest => ({
    type: SATURN_PAGE_NASA_REQUEST,
});

export const saturnPageSuccess = ({ data }): PageSuccess => ({
    type: SATURN_PAGE_NASA_SUCCESS,
    payload: {
        data,
    },
});

export const saturnPageError = ({ error }): PageError => ({
    type: SATURN_PAGE_NASA_ERROR,
    payload: {
        error,
    },
});

export type ActionsTypes = PageRequest | PageSuccess | PageError;
