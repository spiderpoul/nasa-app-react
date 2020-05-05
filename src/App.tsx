import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Header } from './components/Header';
import styled from 'styled-components';
import Content from './components/Content';
import EarthPage from './pages/EarthPage';
import PictureOfTheDay from './pages/PictureOfTheDay';
import MoonPage from './pages/MoonPage';
import SearchPage from './pages/SearchPage';
import JupiterPage from './pages/JupiterPage';
import MarsPage from './pages/MarsPage';
import MercuryPage from './pages/MercuryPage';
import NeptunePage from './pages/NeptunePage';
import PlutoPage from './pages/PlutoPage';
import SaturnPage from './pages/SaturnPage';
import VenusPage from './pages/VenusPage';
import UranusPage from './pages/UranusPage';
import { useDispatch } from 'react-redux';
import { APODFetcher } from './store/PictureOfTheDay/reducer';
import MobileMenu from './components/MobileMenu';

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(APODFetcher.fetchData());
    }, [dispatch]);

    return (
        <Router>
            <Layout>
                <MobileMenu />
                <Header />
                <Content>
                    <Switch>
                        <Route path="/" exact component={PictureOfTheDay} />
                        <Route path="/earth" component={EarthPage} />
                        <Route path="/moon" component={MoonPage} />
                        <Route path="/uranus" component={UranusPage} />
                        <Route path="/jupiter" component={JupiterPage} />
                        <Route path="/mars" component={MarsPage} />
                        <Route path="/mercury" component={MercuryPage} />
                        <Route path="/neptune" component={NeptunePage} />
                        <Route path="/saturn" component={SaturnPage} />
                        <Route path="/venus" component={VenusPage} />
                        <Route path="/pluto" component={PlutoPage} />
                        <Route path="/search" component={SearchPage} />
                    </Switch>
                </Content>
            </Layout>
        </Router>
    );
}

const Layout = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export default App;
