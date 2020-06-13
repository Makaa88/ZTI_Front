import React, {Component} from 'react';
import axios from 'axios'
import { Link, Redirect } from 'react-router-dom';


class LoginComponent extends Component
{
    constructor(props)
    {
        super(props);

        this.state=
            {
                redirect: false,
                username: "",
                password: "",
                loginErrors: "",
            };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event)
    {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit(event)
    {
        const {username, password} = this.state;
        console.log("GHandle submit");

        axios.post(
            "/auth/login",
            {
                username: username, password: password
            }
        ).then(response => {
            if(response.data.loginStatus)
            {
                console.log("Loged");
                this.setState({redirect: true});

            }
            else console.log("Not loged");
        }).catch(error => {
            console.log("login eroor", error);
        });

        event.preventDefault();
    }


    render() {
        const {redirect} = this.state;
        if(redirect)
        {
            return  <Link to='/expenses'/>;
        }

        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    Login:
                    <input type="text" name="username" onChange={this.handleChange}
                           value={this.state.username} required/>
                           <br/>
                    Hasło:
                    <input type="password" name="password" onChange={this.handleChange}
                           value={this.state.password} required/>
                    <br/>
                    <button type="submit">Zaloguj</button>
                </form>

                <p>{this.state.loginErrors}</p>
                <div className='dontHaveAccountStyle'>Utwórz konto <Link to='/register'>Zarejestruj się</Link></div>
            </div>
        );
    }


}

export default LoginComponent;