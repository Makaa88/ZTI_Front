import React, {Component} from 'react';
import axios from "axios";
import { Link, Redirect } from 'react-router-dom';

import EditIncome from './EditIncome';

class Income extends Component
{
    state =
        {
            deleteRender: false,
            edit: false,
        };

    makeEditable()
    {
        this.setState({edit: !this.state.edit});
    }



    deleteExpense(id)
    {
        console.log(id);
        axios.delete(
            "https://mlprojekttomcat2020.eu-gb.mybluemix.net/income/delete/" +id,
        ).then(response => {
            if(response.data.successResponse)
            {
                console.log("deleted");
                this.setState({deleteRender: true});
            }
            else console.log("Delete errror");
        }).catch(error => {
            console.log("Delete error v2", error);
        });

    }

    render() {

        if(!sessionStorage.getItem("session"))
        {
            console.log("inValid session");
            return <Redirect to='/'/>;
        }

        if(this.state.deleteRender)
        {
            return <Redirect to='/income'/>;
        }

        return(
            <div className="bg-light px-4 py-3 d-flex">

                <p className="m-1">{this.props.expense.goal}</p>
                <p className="m-1">{this.props.expense.date}</p>
                <p className="m-1">{Number(this.props.expense.amount).toFixed(2)}</p>
                <button type='button' className="btn btn-sm btn-danger ml-2" onClick={this.deleteExpense.bind(this, this.props.expense.id)}> Usuń </button>
                <button type="button" onClick={this.makeEditable.bind(this)}> Edytuj </button>
                <div>
                    {
                        this.state.edit && <EditIncome id={this.props.expense.id} edit={this.state.edit}/>
                    }
                </div>
            </div>
        );
    }
}


export default Income;