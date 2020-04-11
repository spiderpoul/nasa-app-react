import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Header } from './components/Header';
import styled from 'styled-components';
import Content from './components/Content';
import EarthImages from './pages/EarthImages';
import PictureOfTheDay from './pages/PictureOfTheDay';
import MoonImages from './pages/MoonImages';
import SearchImages from './pages/SearchImages';
import JupiterImages from './pages/JupiterImages';
import MarsImages from './pages/MarsImages';
import MercuryImages from './pages/MercuryImages';
import NeptuneImages from './pages/NeptuneImages';
import PlutoImages from './pages/PlutoImages';
import SaturnImages from './pages/SaturnImages';
import VenusImages from './pages/VenusImages';

function App() {
    return (
        <Router>
            <Layout>
                <Header />
                <Content>
                    <Switch>
                        <Route path="/" exact component={PictureOfTheDay} />
                        <Route path="/earth" component={EarthImages} />
                        <Route path="/moon" component={MoonImages} />
                        <Route path="/jupiter" component={JupiterImages} />
                        <Route path="/mars" component={MarsImages} />
                        <Route path="/mercury" component={MercuryImages} />
                        <Route path="/neptune" component={NeptuneImages} />
                        <Route path="/saturn" component={SaturnImages} />
                        <Route path="/venus" component={VenusImages} />
                        <Route path="/pluto" component={PlutoImages} />
                        <Route path="/search" component={SearchImages} />
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
