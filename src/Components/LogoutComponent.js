import React, {Component} from 'react';
import { Link, Redirect } from 'react-router-dom';
import axios from "axios";

class LogoutComponent extends Component
{
    constructor(props)
    {
        super(props);

        this.state =
            {
                redirect: false
            };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event)
    {
        axios.post(
            "https://mlprojekttomcat2020.eu-gb.mybluemix.net/auth/logout"
        ).then(response => {
        }).catch(error => {
            console.log("logout eroor", error);
        });

        this.setState({redirect: true});
        sessionStorage.clear();

    }

    render() {
        const {redirect} = this.state;
        if(redirect)
        {
            console.log("redirect");
            return <Redirect to='/'/>;
        }

        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <button type="submit">Wyloguj</button>
                </form>
            </div>
        );
    }
}

export default LogoutComponent;