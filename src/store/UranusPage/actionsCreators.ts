import {
    URANUS_PAGE_NASA_ERROR,
    URANUS_PAGE_NASA_REQUEST,
    URANUS_PAGE_NASA_SUCCESS,
} from './constants';
import { LibraryResponse } from '../../models';

interface PageRequest {
    type: typeof URANUS_PAGE_NASA_REQUEST;
}

interface PageSuccess {
    type: typeof URANUS_PAGE_NASA_SUCCESS;
    payload: {
        data: LibraryResponse;
    };
}

interface PageError {
    type: typeof URANUS_PAGE_NASA_ERROR;
    payload: {
        error: any;
    };
}

export const uranusPageRequest = (): PageRequest => ({
    type: URANUS_PAGE_NASA_REQUEST,
});

export const uranusPageSuccess = ({ data }): PageSuccess => ({
    type: URANUS_PAGE_NASA_SUCCESS,
    payload: {
        data,
    },
});

export const uranusPageError = ({ error }): PageError => ({
    type: URANUS_PAGE_NASA_ERROR,
    payload: {
        error,
    },
});

export type ActionsTypes = PageRequest | PageSuccess | PageError;
