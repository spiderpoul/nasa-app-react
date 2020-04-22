import { JupiterPageState } from '../../models';
import { ActionsTypes } from './actionsCreators';
import {
    JUPITER_PAGE_NASA_ERROR,
    JUPITER_PAGE_NASA_REQUEST,
    JUPITER_PAGE_NASA_SUCCESS,
} from './constants';

const initState: JupiterPageState = {
    data: null,
    isLoading: true,
    error: null,
};

const JupiterReducer = (state = initState, action: ActionsTypes) => {
    switch (action.type) {
        case JUPITER_PAGE_NASA_REQUEST: {
            return {
                ...state,
                isLoading: true,
            };
        }
        case JUPITER_PAGE_NASA_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                data: action.payload.data,
            };
        }
        case JUPITER_PAGE_NASA_ERROR: {
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

export default JupiterReducer;
