import React, {Component} from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import LoginComponent from "./Components/LoginComponent";
import RegisterComponent from "./Components/RegisterComponent";
import ExpensesController from "./Components/ExpensesComponent";
import LogoutComponent from './Components/LogoutComponent';
import IncomeComponent from './Components/IncomeComponent';
import Header from "./Layout/Header";

class App extends Component{

      render() {
        return(
            <div>
                <BrowserRouter>
                    <Header/>
                    <Switch>
                        <Route exact path='/' component={LoginComponent}/>
                        <Route exact path='/login' component={LoginComponent}/>
                        <Route exact path='/register' component={RegisterComponent}/>
                        <Route exact path='/expenses' component={ExpensesController}/>
                        <Route exact path='/income' component={IncomeComponent}/>
                        <Route exact path='/logout' component={LogoutComponent}/>
                    </Switch>
                </BrowserRouter>
            </div>

        );
      }
}

export default App;
