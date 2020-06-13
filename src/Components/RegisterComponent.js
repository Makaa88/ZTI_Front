import React, {Component} from 'react';
import axios from 'axios'
import { Link, Redirect } from 'react-router-dom';



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
            "/auth/createAccount",
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
            <div>
                <form onSubmit={this.handleSubmit}>
                    Imię:
                    <input type="text" name="name" onChange={this.handleChange}
                           value={this.state.name} required/>
                    <br/>
                    Nazwisko:
                    <input type="text" name="surname" onChange={this.handleChange}
                           value={this.state.surname} required/>
                    <br/>
                    Login:
                    <input type="text" name="username" onChange={this.handleChange}
                           value={this.state.username} required/>
                    <br/>
                    Hasło:
                    <input type="password" name="password" onChange={this.handleChange}
                           value={this.state.password} required/>
                    <br/>
                    <button type="submit">Zarejestruj</button>
                </form>

                <p>{this.state.loginErrors}</p>
            </div>
        );
    }


}

export default RegisterComponent;