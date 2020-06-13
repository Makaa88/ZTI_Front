import React, {Component} from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import LoginComponent from "./Components/LoginComponent";
import RegisterComponent from "./Components/RegisterComponent";
import ExpensesController from "./Components/ExpensesComponent";

class App extends Component{

      render() {
        return(
            <div>
                <BrowserRouter>
                    <Switch>
                        <Route exact path='/' component={LoginComponent}/>
                        <Route exact path='/register' component={RegisterComponent}/>
                        <Route path='/expenses' component={ExpensesController}/>
                    </Switch>
                </BrowserRouter>
            </div>

        );
      }
}

export default App;
