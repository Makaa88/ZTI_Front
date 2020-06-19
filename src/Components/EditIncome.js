import React, { Fragment, useState, Component } from 'react'
import axios from "axios";


class EditIncome extends Component
{
    constructor(props)
    {
        super(props);

        this.state=
            {
                redirect: false,
                date: "",
                ammount: 0.0,
                goal: "",
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
        let id = this.props.id;
        const {date, ammount, goal} = this.state;
        console.log("GHandle submit");
        let pid = parseInt(sessionStorage.getItem("session"));

        axios.put(
            "https://mlprojekttomcat2020.eu-gb.mybluemix.net/income/edit/"+id,
            {
                date: date, amount: ammount, goal: goal, personId: pid
            }
        ).then(response => {
            if(response.data.successResponse)
            {
                this.setState({redirect: true});
                this.props.edit = false;
            }
        }).catch(error => {
            console.log(error);
        });

    }

    render() {
        return (
            <div>
                <form className="d-flex ml-auto" onSubmit={this.handleSubmit}>
                    <div>
                        Data:
                        <input className="form-control center-block" type="date" name="date" onChange={this.handleChange}
                               value={this.state.date}/>
                    </div>
                    <div className="form-group">
                        Kwota:
                        <input className="form-control center-block" type="number" name="ammount" onChange={this.handleChange}
                               value={this.state.ammount}/>
                    </div>
                    <div className="form-group">
                        Źródło przychodu:
                        <input className="form-control center-block" type="text" name="goal" onChange={this.handleChange}
                               value={this.state.goal}/>
                    </div>
                    <div className="form-group row align-items-center">
                        <button className="btn btn-primary btn-lg center-block" type="submit">Dodaj</button>
                    </div>
                </form>
            </div>
        )
    }

}



export default EditIncome;