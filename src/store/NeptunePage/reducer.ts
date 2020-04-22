import { NeptunePageState } from '../../models';
import { ActionsTypes } from './actionsCreators';
import {
    NEPTUNE_PAGE_NASA_ERROR,
    NEPTUNE_PAGE_NASA_REQUEST,
    NEPTUNE_PAGE_NASA_SUCCESS,
} from './constants';

const initState: NeptunePageState = {
    data: null,
    isLoading: true,
    error: null,
};

const NeptuneReducer = (state = initState, action: ActionsTypes) => {
    switch (action.type) {
        case NEPTUNE_PAGE_NASA_REQUEST: {
            return {
                ...state,
                isLoading: true,
            };
        }
        case NEPTUNE_PAGE_NASA_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                data: action.payload.data,
            };
        }
        case NEPTUNE_PAGE_NASA_ERROR: {
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

export default NeptuneReducer;
