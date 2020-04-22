import { VenusPageState } from '../../models';
import { ActionsTypes } from './actionsCreators';
import {
    VENUS_PAGE_NASA_ERROR,
    VENUS_PAGE_NASA_REQUEST,
    VENUS_PAGE_NASA_SUCCESS,
} from './constants';

const initState: VenusPageState = {
    data: null,
    isLoading: true,
    error: null,
};

const VenusReducer = (state = initState, action: ActionsTypes) => {
    switch (action.type) {
        case VENUS_PAGE_NASA_REQUEST: {
            return {
                ...state,
                isLoading: true,
            };
        }
        case VENUS_PAGE_NASA_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                data: action.payload.data,
            };
        }
        case VENUS_PAGE_NASA_ERROR: {
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

export default VenusReducer;
