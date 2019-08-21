import React from 'react';
import { HashRouter as Router, Route, Link } from "react-router-dom";
import IndexPage from './IndexPage';
import GenePage from './GenePage';
import './App.css';

function App() {
    return (
        <Router basename="/">
            <header>
                <Link to="/">Return to Index</Link>
            </header>

            <Route path="/" exact component={IndexPage} />
            <Route path="/:geneId" component={GenePage} />
        </Router>
    );
}

export default App;
