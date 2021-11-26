import React from 'react';
 import { Switch ,Route } from 'react-router-dom';
  import Inicio from './Paginas/Inicio';
   import Config from './Paginas/Config';
    export default () => {
         return(
              <Switch>
                   <Route path="/" >
                        <Inicio />
                         primeira pag
                          </Route>
                           <Route path="/Config"> 
                           <Config /> 
                           </Route>
                            </Switch>
                             );
                              }