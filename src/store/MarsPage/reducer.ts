import { MarsPageState } from '../../models';
import { ActionsTypes } from './actionsCreators';
import {
    MARS_PAGE_NASA_ERROR,
    MARS_PAGE_NASA_REQUEST,
    MARS_PAGE_NASA_SUCCESS,
} from './constants';

const initState: MarsPageState = {
    data: null,
    isLoading: true,
    error: null,
};

const MarsReducer = (state = initState, action: ActionsTypes) => {
    switch (action.type) {
        case MARS_PAGE_NASA_REQUEST: {
            return {
                ...state,
                isLoading: true,
            };
        }
        case MARS_PAGE_NASA_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                data: action.payload.data,
            };
        }
        case MARS_PAGE_NASA_ERROR: {
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

export default MarsReducer;
