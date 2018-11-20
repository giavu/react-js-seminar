import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NotFound from './components/notfound/NotFound';
import DetailSeminar from './components/detailseminar/DetailSeminar';

import './index.css';
import Header from './components/common/Header';
import BigList from './components/biglist/BigList';

const App = () => {
    // const maintitle = 'JavaScript Libraries & Frameworks Seminar';
    return (
        <BrowserRouter>
            <div>
                <Header />
                <Switch>
                    <Route path="/" component={BigList} exact />
                    <Route path="/seminar/:id" component={DetailSeminar} exact />
                    <Route component={NotFound} />
                </Switch>
            </div>
        </BrowserRouter>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));


