import { MercuryPageState } from '../../models';
import { ActionsTypes } from './actionsCreators';
import {
    MERCURY_PAGE_NASA_ERROR,
    MERCURY_PAGE_NASA_REQUEST,
    MERCURY_PAGE_NASA_SUCCESS,
} from './constants';

const initState: MercuryPageState = {
    data: null,
    isLoading: true,
    error: null,
};

const MercuryReducer = (state = initState, action: ActionsTypes) => {
    switch (action.type) {
        case MERCURY_PAGE_NASA_REQUEST: {
            return {
                ...state,
                isLoading: true,
            };
        }
        case MERCURY_PAGE_NASA_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                data: action.payload.data,
            };
        }
        case MERCURY_PAGE_NASA_ERROR: {
            return {
                ...state,
                isLoading: false,
                error: action.payload.error,
            };
        }
        default:
            return state;
    }
};

export default MercuryReducer;
