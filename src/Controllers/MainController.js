import React, {Component} from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import ExpensesController from '../Components/ExpensesComponent';

class MainController extends Component
{
    render()
    {
        return (
            <div className='mainController'>
                <Switch>
                    <Route path='/' component={ExpensesController}/>
                    <Route path='/expenses' component={ExpensesController}/>
                </Switch>
            </div>
        )
    }
}
