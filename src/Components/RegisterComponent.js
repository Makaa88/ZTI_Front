import React, {Component} from 'react';
import axios from 'axios'
import { Link, Redirect } from 'react-router-dom';
import '../index.css'


class RegisterComponent extends Component
{
    constructor(props)
    {
        super(props);

        this.state=
            {
                redirect: false,
                name: "",
                surname: "",
                username: "",
                password: "",
                registerErrors: "",
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
        const {name, surname, username, password} = this.state;
        console.log("GHandle submit");

        axios.post(
            "https://mlprojekttomcat2020.eu-gb.mybluemix.net/auth/createAccount",
            {
               name: name, surname: surname, username: username, password: password
            }
        ).then(response => {
            this.setState({redirect: true});
            console.log("registered");
        }).catch(error => {
            console.log("login eroor", error);
        });

        event.preventDefault();
    }


    render() {
        const {redirect} = this.state;
        if(redirect)
        {
            return <Redirect to='/'/>;
        }

        return (
            <div className="container login-container center">
                <div className="login-form-1">
                    <form onSubmit={this.handleSubmit}>
                        <div className="row padding5">
                            <div className="col-sm"> Imię: </div>
                            <div className="col-sm">
                                <input className="form-control" type="text" name="name" onChange={this.handleChange}
                                   value={this.state.name} required/>
                            </div>
                        </div>
                        <div className="row padding5">
                            <div className="col-sm">Nazwisko:</div>
                            <div className="col-sm">
                                <input className="form-control" type="text" name="surname" onChange={this.handleChange}
                                   value={this.state.surname} required/>
                            </div>
                        </div>
                        <div className="row padding5">
                            <div className="col-sm">Login:</div>
                            <div className="col-sm">
                                <input className="form-control" type="text" name="username" onChange={this.handleChange}
                                   value={this.state.username} required/>
                            </div>
                        </div>
                        <div className="row padding5">
                            <div className="col-sm">Hasło:</div>
                            <div className="col-sm">
                                <input className="form-control" type="password" name="password" onChange={this.handleChange}
                                   value={this.state.password} required/>
                            </div>
                        </div>
                        <div className="padding15">
                            <button className="btn btn-primary btn-lg center-block" type="submit">Zarejestruj</button>
                        </div>
                    </form>

                    <p>{this.state.loginErrors}</p>
                </div>
            </div>
        );
    }


}

export default RegisterComponent;