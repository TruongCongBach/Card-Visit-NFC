import React                                       from 'react';
import CardVisit                                   from "./CardVisit";
import customersCardVisit                          from "./contacts";
import './App.css';
import { BrowserRouter as Router, Route, Switch, } from "react-router-dom";
import Privacy from './Privacy';

function App() {
    return (
        <div className={'App greyBG'}>
            <Router>
                <Switch>
                    {customersCardVisit.map((cardVisit, index) => {
                        return <Route key={index}
                                      path={cardVisit.patchUrl}
                        >
                            <CardVisit cardVisit={cardVisit}/>
                        </Route>;
                    })}
                  <Route path={'/privacy'}>
                    <Privacy/>
                  </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
