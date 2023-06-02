import React, {Component} from 'react';
import { variables } from "./Variables.js";

export class Conductor extends Component{
    
    constructor(props){
        super(props);

        this.state={
            conductors:[],
            modalTitle:"",
            empId:0,
            name:"",
            age:0,
            gender:"",
            address:"",
            mobileNo: 0,
        }
    }

    refreshList(){
        fetch(variables.API_URL+'Conductors')
        .then(response=>response.json())
        .then(data=>{
            this.setState({conductors: data});
        });
    }

    componentDidMount(){
        this.refreshList();
    }

    changeName =  (b)=>{
        this.setState({name: b.target.value});
    }

    changeAge =  (b)=>{
        this.setState({age: b.target.value});
    }

    changeGender =  (b)=>{
        this.setState({gender: b.target.value});
    }

    changeAddress =  (b)=>{
        this.setState({address: b.target.value});
    }

    changeMobileNo =  (b)=>{
        this.setState({mobileNo: b.target.value});
    }

    addClick(){
        this.setState({
            modalTitle:"Add Conductor",
            empId:0,
            name:"",
            age:0,
            gender:"",
            address:"",
            mobileNo: 0,
        });
    }

    editClick(conductor){
        this.setState({
            modalTitle: "Edit Conductor Details",
            empId: conductor.empId,
            name: conductor.name,
            age: conductor.age,
            gender: conductor.gender,
            address: conductor.address,
            mobileNo: conductor.mobileNo,
        })
    }

    createClick(){
        fetch(variables.API_URL+'Conductors',{
            method: 'POST',
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: this.state.name,
                age: this.state.age,
                gender: this.state.gender,
                address: this.state.address,
                mobileNo: this.state.mobileNo,
            })
        })
        .then(res => res.json())
        .then((result) => {
            alert("Added Successfully");
            this.refreshList();
        }, (error) => {
            alert('Failed');
        })
    }

    updateClick(){
        fetch(variables.API_URL+'Conductors/'+this.state.empId,{
            method: 'PUT',
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                empId: this.state.empId,
                name: this.state.name,
                age: this.state.age,
                gender: this.state.gender,
                address: this.state.address,
                mobileNo: this.state.mobileNo,
            }),
        })
        .then(res => {res.json(); console.log('Success')})
        .then((result) => {
            alert('Updated Successfully');
            this.refreshList();
        }, (error) => {
            alert(error);
        })
    }

    deleteClick(id){
        if(window.confirm('Are you sure?')){
            fetch(variables.API_URL+'Conductors/'+id,{
                method: 'DELETE',
                headers:{
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                }
            })
            .then(res => {res.json(); console.log('Success')})
            .then((result) => {
                alert('Deleted Successfully');
                this.refreshList();
            }, (error) => {
                alert(error);
            })
        }
        
    }

    render(){
        const {
            conductors,
            modalTitle,
            empId,
            name,
            age,
            gender,
            address,
            mobileNo,
        }=this.state;
        return(
            <div>
                <button type="button" 
                className="btn btn-primary m-2 float-end" 
                data-bs-toggle="modal" 
                data-bs-target="#exampleModal" 
                onClick={() => this.addClick()}>
                    Add Conductor  
                </button>"
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>
                                Employee Id
                            </th>
                            <th>
                                Name
                            </th>
                            <th>
                                Age
                            </th>
                            <th>
                                Gender
                            </th>
                            <th>
                                Address
                            </th>
                            <th>
                                Mobile No
                            </th>
                            <th>
                                Options
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {conductors.map(conductor=>
                            <tr key={conductor.empId}>
                                <td>{conductor.empId}</td>
                                <td>{conductor.name}</td>
                                <td>{conductor.age}</td>
                                <td>{conductor.gender}</td>
                                <td>{conductor.address}</td>
                                <td>{conductor.mobileNo}</td>
                                <td>
                                    <button type="button" 
                                    className="btn btn-light mr-1"
                                    data-bs-toggle="modal"
                                    data-bs-target="#exampleModal"
                                    onClick={() => this.editClick(conductor)}
                                    >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                                        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                                        <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                                    </svg>
                                    </button>
                                    <button type="button" 
                                    className="btn btn-light mr-1"
                                    onClick={() => this.deleteClick(conductor.empId)}
                                    >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash-fill" viewBox="0 0 16 16">
                                        <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
                                    </svg>
                                    </button>
                                </td>
                            </tr>
                            )}
                    </tbody>
                </table>

                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-hidden="true">
                    <div className="modal-dialog modal-lg modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">{modalTitle}</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <div className="input-group mb-3">
                                    <span className="input-grop-text"> Employee Name </span>
                                    <input type="text" className="form-control" value={name} onChange={this.changeName} />
                                </div>
                                <div className="input-group mb-3">
                                    <span className="input-grop-text"> Employee Age </span>
                                    <input type="number" className="form-control" value={age} onChange={this.changeAge} />
                                </div>
                                <div className="input-group mb-3">
                                    <span className="input-grop-text"> Employee Gender </span>
                                    <input type="text" className="form-control" value={gender} onChange={this.changeGender} />
                                </div>
                                <div className="input-group mb-3">
                                    <span className="input-grop-text"> Employee Address </span>
                                    <input type="text" className="form-control" value={address} onChange={this.changeAddress} />
                                </div>
                                <div className="input-group mb-3">
                                    <span className="input-grop-text"> Employee Mobile Number </span>
                                    <input type="text" className="form-control" value={mobileNo} onChange={this.changeMobileNo} />
                                </div>
                                
                                {empId===0?
                                <button type="button"
                                className="btn btn-primary float-start"
                                onClick={() => this.createClick()}>
                                    Create
                                </button>
                                : null}

                                {empId !== 0?
                                <button type="button"
                                className="btn btn-primary float-start"
                                onClick={() => this.updateClick()}>
                                    Update
                                </button>
                                : null}
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}