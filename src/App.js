import React from 'react'
import Homepage from './Homepage.js';
import Market from './Market.js';
import { Route, BrowserRouter as Router } from "react-router-dom";
export default function App() {
    return (
        <Router>
            <Route path="/" exact component={Homepage}/>
            <Route path="/market" exact component={Market}/>
        </Router>
    )
}
