import React from 'react';
import { Switch ,Route } from 'react-router-dom';
import Inicio from './Pages/Inicio';
import Config from './Pages/Config';
import Sobre from './Pages/Sobre';
    export default () => {
         return(
              <Switch>
                   <Route exact path="/" >
                        
                        <Inicio />
                         
                    </Route>

                    <Route exact path="/Config"> 
                        
                           <Config /> 

                    </Route>

                    <Route exact path="/Sobre"> 
                    
                           <Sobre /> 

                    </Route>
               </Switch>
     );
}