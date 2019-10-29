import React, { useEffect } from 'react';
import { Route, HashRouter, Switch } from 'react-router-dom';

import MainPage from '../MainPage/MainPage.container';
import SubPage from '../SubPage/SubPage.container';
import VideoPopup from '../../components/VideoPopup/VideoPopup.component';
import initializeNFC from '../../components/NFCControler';

const App = () => {
    useEffect(() => {
        initializeNFC();
    }, []);

    return (
        <>
            <HashRouter>
                <Switch>
                    <Route path="/" exact component={MainPage} />
                    <Route path="/:id" component={SubPage} />
                </Switch>
            </HashRouter>
            <VideoPopup />
        </>
    );
};

export default App;
