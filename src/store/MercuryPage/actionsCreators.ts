import {
    MERCURY_PAGE_NASA_ERROR,
    MERCURY_PAGE_NASA_REQUEST,
    MERCURY_PAGE_NASA_SUCCESS,
} from './constants';
import { LibraryResponse } from '../../models';

interface MercuryPageRequest {
    type: typeof MERCURY_PAGE_NASA_REQUEST;
}

interface MercuryPageSuccess {
    type: typeof MERCURY_PAGE_NASA_SUCCESS;
    payload: {
        data: LibraryResponse;
    };
}

interface MercuryPageError {
    type: typeof MERCURY_PAGE_NASA_ERROR;
    payload: {
        error: any;
    };
}

export const mercuryPageRequest = (): MercuryPageRequest => ({
    type: MERCURY_PAGE_NASA_REQUEST,
});

export const mercuryPageSuccess = ({ data }): MercuryPageSuccess => ({
    type: MERCURY_PAGE_NASA_SUCCESS,
    payload: {
        data,
    },
});

export const mercuryPageError = ({ error }): MercuryPageError => ({
    type: MERCURY_PAGE_NASA_ERROR,
    payload: {
        error,
    },
});

export type ActionsTypes =
    | MercuryPageRequest
    | MercuryPageSuccess
    | MercuryPageError;
