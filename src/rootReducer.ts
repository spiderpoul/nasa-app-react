import { combineReducers } from 'redux';
import pictureOfTheDay from './store/PictureOfTheDay/reducer';
import { AppState } from './models';

const rootReducer = combineReducers<AppState>({
    pictureOfTheDay,
});

export default rootReducer;
