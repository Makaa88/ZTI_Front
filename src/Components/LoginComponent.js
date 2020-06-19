import React, {Component} from 'react';
import axios from 'axios'
import { Link, Redirect } from 'react-router-dom';
import '../index.css'

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
            "https://mlprojekttomcat2020.eu-gb.mybluemix.net/auth/login",
            {
                username: username, password: password
            }
        ).then(response => {
            if(response.data.loginStatus)
            {
                console.log("Loged");
                sessionStorage.setItem("session", response.data.person.id);
                console.log(sessionStorage.getItem("session"));
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
            return  <Redirect to='/expenses'/>;
        }

        return (
            <div className="container login-container center">
                <div className="login-form-1">
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                        Login:
                        <input className="form-control center-block" type="text" name="username" onChange={this.handleChange}
                               value={this.state.username} required/>
                        </div>
                        <div className="form-group">
                        Hasło:
                        <input className="form-control center-block" type="password" name="password" onChange={this.handleChange}
                               value={this.state.password} required/>
                        </div>
                        <div className="form-group row justify-content-center align-items-center">
                            <button className="btn btn-primary btn-lg center-block" type="submit">Zaloguj</button>
                        </div>
                    </form>

                    <p>{this.state.loginErrors}</p>
                    <div className="form-group row justify-content-center align-items-center">

                            Utwórz konto <Link to='/register'>Zarejestruj się</Link>

                    </div>
                </div>
            </div>
        );
    }


}

export default LoginComponent;