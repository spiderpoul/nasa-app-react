import { SaturnPageState } from '../../models';
import { ActionsTypes } from './actionsCreators';
import {
    SATURN_PAGE_NASA_ERROR,
    SATURN_PAGE_NASA_REQUEST,
    SATURN_PAGE_NASA_SUCCESS,
} from './constants';

const initState: SaturnPageState = {
    data: null,
    isLoading: true,
    error: null,
};

const SaturnReducer = (state = initState, action: ActionsTypes) => {
    switch (action.type) {
        case SATURN_PAGE_NASA_REQUEST: {
            return {
                ...state,
                isLoading: true,
            };
        }
        case SATURN_PAGE_NASA_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                data: action.payload.data,
            };
        }
        case SATURN_PAGE_NASA_ERROR: {
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

export default SaturnReducer;
