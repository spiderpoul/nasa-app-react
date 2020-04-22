import {
    NEPTUNE_PAGE_NASA_ERROR,
    NEPTUNE_PAGE_NASA_REQUEST,
    NEPTUNE_PAGE_NASA_SUCCESS,
} from './constants';
import { LibraryResponse } from '../../models';

interface PageRequest {
    type: typeof NEPTUNE_PAGE_NASA_REQUEST;
}

interface PageSuccess {
    type: typeof NEPTUNE_PAGE_NASA_SUCCESS;
    payload: {
        data: LibraryResponse;
    };
}

interface PageError {
    type: typeof NEPTUNE_PAGE_NASA_ERROR;
    payload: {
        error: any;
    };
}

export const neptunePageRequest = (): PageRequest => ({
    type: NEPTUNE_PAGE_NASA_REQUEST,
});

export const neptunePageSuccess = ({ data }): PageSuccess => ({
    type: NEPTUNE_PAGE_NASA_SUCCESS,
    payload: {
        data,
    },
});

export const neptunePageError = ({ error }): PageError => ({
    type: NEPTUNE_PAGE_NASA_ERROR,
    payload: {
        error,
    },
});

export type ActionsTypes = PageRequest | PageSuccess | PageError;
