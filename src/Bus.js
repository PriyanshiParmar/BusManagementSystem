import React, {Component} from 'react';
import { variables } from "./Variables.js";

export class Bus extends Component{
    
    constructor(props){
        super(props);

        this.state={
            buses:[],
            modalTitle:"",
            BusNo:0,
            ChassisNo:0,
            Capacity:0,
            Manufacturer:"",
            Model:"",
        }
    }

    refreshList(){
        fetch(variables.API_URL+'Buses')
        .then(response=>response.json())
        .then(data=>{
            this.setState({buses: data});
        });
    }

    componentDidMount(){
        this.refreshList();
    }

    changeChassisNo =  (b)=>{
        this.setState({ChassisNo: b.target.value});
    }

    changeCapacity =  (b)=>{
        this.setState({Capacity: b.target.value});
    }

    changeManufacturer =  (b)=>{
        this.setState({Manufacturer: b.target.value});
    }

    changeModel =  (b)=>{
        this.setState({Model: b.target.value});
    }

    addClick(){
        this.setState({
            modalTitle:"Add Bus",
            BusNo:0,
            ChassisNo:0,
            Capacity:0,
            Manufacturer:"",
            Model:""
        });
    }

    editClick(bus){
        this.setState({
            modalTitle: "Edit Bus Details",
            BusNo: bus.busNo,
            ChassisNo: bus.chassisNo,
            Capacity: bus.capacity,
            Manufacturer: bus.manufacturer,
            Model: bus.model
        })
    }

    createClick(){
        fetch(variables.API_URL+'Buses',{
            method: 'POST',
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                ChassisNo: this.state.ChassisNo,
                Capacity: this.state.Capacity,
                Manufacturer: this.state.Manufacturer,
                Model: this.state.Model
            })
        })
        .then((res) => {console.log(res.json());}, (error) => {alert(error);})
        .then((result) => {
            alert("Added Successfully");
            this.refreshList();
        }, (error) => {
            alert('Failed');
        })
        .catch(error => alert(error.message))
    }

    updateClick(){
        fetch(variables.API_URL+'Buses/'+this.state.BusNo+'/',{
            method: 'PUT',
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                busNo: this.state.BusNo,
                chassisNo: this.state.ChassisNo,
                capacity: this.state.Capacity,
                manufacturer: this.state.Manufacturer,
                model: this.state.Model,
            }),
        })
        .then(res => {res.json(); console.log('Success')}, (error) => {alert(error);})
        .then((result) => {
            alert('Updated Successfully');
            this.refreshList();
        }, (error) => {
            alert(error);
        })
    }

    deleteClick(id){
        if(window.confirm('Are you sure?')){
            fetch(variables.API_URL+'Buses/'+id,{
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
            buses,
            modalTitle,
            BusNo,
            ChassisNo,
            Capacity,
            Manufacturer,
            Model
        }=this.state;
        return(
            <div>
                <button type="button" 
                className="btn btn-primary m-2 float-end" 
                data-bs-toggle="modal" 
                data-bs-target="#exampleModal" 
                onClick={() => this.addClick()}>
                    Add Bus    
                </button>"
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>
                                Bus Number
                            </th>
                            <th>
                                Chassis No
                            </th>
                            <th>
                                Capacity
                            </th>
                            <th>
                                Manufacturer
                            </th>
                            <th>
                                Model 
                            </th>
                            <th>
                                Options
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {buses.map(bus=>
                            <tr key={bus.busNo}>
                                <td>{bus.busNo}</td>
                                <td>{bus.chassisNo}</td>
                                <td>{bus.capacity}</td>
                                <td>{bus.manufacturer}</td>
                                <td>{bus.model}</td>
                                <td>
                                    <button type="button" 
                                    className="btn btn-light mr-1"
                                    data-bs-toggle="modal"
                                    data-bs-target="#exampleModal"
                                    onClick={() => this.editClick(bus)}
                                    >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                                        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                                        <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                                    </svg>
                                    </button>
                                    <button type="button" 
                                    className="btn btn-light mr-1"
                                    onClick={() => this.deleteClick(bus.busNo)}
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
                                    <span className="input-grop-text">ChassisNo</span>
                                    <input type="number" className="form-control" value={ChassisNo} onChange={this.changeChassisNo} />
                                </div>
                                <div className="input-group mb-3">
                                    <span className="input-grop-text">Capacity</span>
                                    <input type="number" className="form-control" value={Capacity} onChange={this.changeCapacity} />
                                </div>
                                <div className="input-group mb-3">
                                    <span className="input-grop-text">Manufacturer</span>
                                    <input type="text" className="form-control" value={Manufacturer} onChange={this.changeManufacturer} />
                                </div>
                                <div className="input-group mb-3">
                                    <span className="input-grop-text">Model</span>
                                    <input type="text" className="form-control" value={Model} onChange={this.changeModel} />
                                </div>
                                {BusNo===0?
                                <button type="button"
                                className="btn btn-primary float-start"
                                onClick={() => this.createClick()}>
                                    Create
                                </button>
                                : null}

                                {BusNo !== 0?
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