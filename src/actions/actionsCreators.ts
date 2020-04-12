// ------- NASA IMAGE OF THE DAY ------ //

// ------- MERCURY ------ //

interface MercuryPageRequest {
    type: typeof ACTIONS.MAIN_PAGE_NASA_IMAGE_OF_DAY_REQUEST;
}

export const MercuryPageRequest = (): MercuryPageRequest => ({
    type: ACTIONS.MAIN_PAGE_NASA_IMAGE_OF_DAY_REQUEST,
});

interface MercuryPageSuccess {
    type: typeof ACTIONS.MAIN_PAGE_NASA_IMAGE_OF_DAY_SUCCESS;
    payload: {
        data: PictureOfTheDayResponse;
    };
}

export const MercuryPageSuccess = (data): ImageOfTheDaySuccess => ({
    type: ACTIONS.MAIN_PAGE_NASA_IMAGE_OF_DAY_SUCCESS,
    payload: {
        data,
    },
});

interface MercuryPageError {
    type: typeof ACTIONS.MAIN_PAGE_NASA_IMAGE_OF_DAY_ERROR;
    payload: {
        error: any;
    };
}

export const MercuryPageError = (error): ImageOfTheDayError => ({
    type: ACTIONS.MAIN_PAGE_NASA_IMAGE_OF_DAY_ERROR,
    payload: {
        error,
    },
});

export type MercuryPageActionsTypes =
    | ImageOfTheDayRequest
    | ImageOfTheDaySuccess
    | ImageOfTheDayError;
