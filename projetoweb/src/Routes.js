import React from 'react';
import { Switch, Route } from 'react-router-dom';

export default () => {
    return(
        <Switch>
            <Route exact path="/" >
                primeira pag
            </Route>
            
            <Route exact path="/config" >
                config
            </Route>
        </Switch>
    );
}