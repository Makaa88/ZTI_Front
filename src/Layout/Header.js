import React, {Component} from 'react';
import { Link } from 'react-router-dom'

import LogoutComponent from '../Components/LogoutComponent';


class Header extends Component
{

    render() {
        return(
            <nav>
                <ul>
                    <li> <LogoutComponent/> </li>
                    <li className="nav-item"> <Link to="/expenses" className="nav-link"> Wydatki </Link> </li>
                    <li className="nav-item"> <Link to="/income" className="nav-link"> Przychody </Link> </li>
                </ul>
            </nav>
        )
    }
}

export default Header;