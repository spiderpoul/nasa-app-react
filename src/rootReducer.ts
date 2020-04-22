import { combineReducers } from 'redux';
import pictureOfTheDay from './store/PictureOfTheDay/reducer';
import mercuryPage from './store/MercuryPage/reducer';
import venusPage from './store/VenusPage/reducer';
import earthPage from './store/EarthPage/reducer';
import jupiterPage from './store/JupiterPage/reducer';
import marsPage from './store/MarsPage/reducer';
import moonPage from './store/MoonPage/reducer';
import neptunePage from './store/NeptunePage/reducer';
import plutoPage from './store/PlutoPage/reducer';
import saturnPage from './store/SaturnPage/reducer';
import uranusPage from './store/UranusPage/reducer';
import searchPage from './store/SearchPage/reducer';
import { AppState } from './models';

const rootReducer = combineReducers<AppState>({
    pictureOfTheDay,
    mercuryPage,
    venusPage,
    earthPage,
    jupiterPage,
    marsPage,
    moonPage,
    neptunePage,
    plutoPage,
    saturnPage,
    uranusPage,
    searchPage,
});

export default rootReducer;
