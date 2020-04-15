import { combineReducers } from 'redux';
import pictureOfTheDay from './store/PictureOfTheDay/reducer';
import mercuryPage from './store/MercuryPage/reducer';
import { AppState } from './models';

const rootReducer = combineReducers<AppState>({
    pictureOfTheDay,
    mercuryPage,
});

export default rootReducer;
