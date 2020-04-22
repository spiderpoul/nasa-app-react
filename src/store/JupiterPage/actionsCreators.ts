import {
    JUPITER_PAGE_NASA_ERROR,
    JUPITER_PAGE_NASA_REQUEST,
    JUPITER_PAGE_NASA_SUCCESS,
} from './constants';
import { LibraryResponse } from '../../models';

interface PageRequest {
    type: typeof JUPITER_PAGE_NASA_REQUEST;
}

interface PageSuccess {
    type: typeof JUPITER_PAGE_NASA_SUCCESS;
    payload: {
        data: LibraryResponse;
    };
}

interface PageError {
    type: typeof JUPITER_PAGE_NASA_ERROR;
    payload: {
        error: any;
    };
}

export const jupiterPageRequest = (): PageRequest => ({
    type: JUPITER_PAGE_NASA_REQUEST,
});

export const jupiterPageSuccess = ({ data }): PageSuccess => ({
    type: JUPITER_PAGE_NASA_SUCCESS,
    payload: {
        data,
    },
});

export const jupiterPageError = ({ error }): PageError => ({
    type: JUPITER_PAGE_NASA_ERROR,
    payload: {
        error,
    },
});

export type ActionsTypes = PageRequest | PageSuccess | PageError;
