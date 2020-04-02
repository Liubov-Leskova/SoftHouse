import './App.scss'
import React, {Suspense, lazy} from 'react';
import {Switch, Route} from 'react-router-dom';
import Header from './components/Header';
import Loader from './components/common/Loader'
const MainPage = lazy(() => import('./pages/MainPage'));
const HeroPage = lazy(() => import('./pages/HeroPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

function App() {
    return (
        <>
            <Header/>
            <Suspense fallback={<Loader isLoading={true} />}>
                <Switch>
                    <Route exact path='/' component={MainPage}/>
                    <Route path='/:heroname' component={HeroPage}/>
                    <Route component={NotFoundPage}/>
                </Switch>
            </Suspense>
        </>
    );
}

export default App;
