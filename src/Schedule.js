import React, {Component} from 'react';
import { variables } from "./Variables.js";

export class Schedule extends Component{
    
    constructor(props){
        super(props);

        this.state={
            schedules:[],
            modalTitle:"",
            scheduleId:0,
            arrivalTime:"",
            departureTime:"",
            drivers:[],
            conductors:[],
            buses: [],
            routes: [],
            driverId:"",
            conductorId:"",
            busScheduledNo:"",
            routeToBeFollowedRouteNo:""
        }
    }

    refreshList(){

        fetch(variables.API_URL+'BusSchedules')
        .then(response=>response.json())
        .then(data=>{
            this.setState({schedules: data});
        });

        fetch(variables.API_URL+'Drivers')
        .then(response=>response.json())
        .then(data=>{
            this.setState({drivers: data});
        });

        fetch(variables.API_URL+'Conductors')
        .then(response=>response.json())
        .then(data=>{
            this.setState({conductors: data});
        });

        fetch(variables.API_URL+'Buses')
        .then(response=>response.json())
        .then(data=>{
            this.setState({buses: data});
        });

        fetch(variables.API_URL+'Routes')
        .then(response=>response.json())
        .then(data=>{
            this.setState({routes: data});
        });
    }

    componentDidMount(){
        this.refreshList();
    }

    changeArrivalTime =  (b)=>{
        this.setState({arrivalTime: b.target.value});
    }

    changeDepartureTime =  (b)=>{
        this.setState({departureTime: b.target.value});
    }

    changeDriverId =  (b)=>{
        this.setState({driverId: b.target.value});
    }

    changeConductorId =  (b)=>{
        this.setState({conductorId: b.target.value});
    }
    changeBusScheduled =  (b)=>{
        this.setState({busScheduledNo: b.target.value});
    }

    changeRouteToBeFollowed =  (b)=>{
        this.setState({routeToBeFollowedRouteNo: b.target.value});
    }

    addClick(){
        this.setState({
            modalTitle:"Add Schedule",
            scheduleId:0,
            driverId:"",
            conductorId:"",
            arrivalTime:"",
            departureTime:"",
            busScheduledNo:"",
            routeToBeFollowedRouteNo:"",
        });
    }

    editClick(sch){
        this.setState({
            modalTitle: "Edit Schedule Details",
            scheduleId:sch.scheduleId,
            driverId:sch.driverId,
            conductorId:sch.conductorId,
            arrivalTime:sch.arrivalTime,
            departureTime:sch.departureTime,
            busScheduledNo:sch.busScheduledNo,
            routeToBeFollowedRouteNo:sch.routeToBeFollowedRouteNo,
        })
    }

    createClick(){
        fetch(variables.API_URL+'BusSchedules',{
            method: 'POST',
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                driverId:this.state.driverId,
                conductorId:this.state.conductorId,
                arrivalTime:this.state.arrivalTime,
                departureTime:this.state.departureTime,
                busScheduledNo:this.state.busScheduledNo,
                routeToBeFollowedRouteNo:this.state.routeToBeFollowedRouteNo,
            })
        })
        .then(res => {res.json(); console.log('Success')})
        .then((result) => {
            alert("Added Successfully");
            this.refreshList();
        }, (error) => {
            alert('Failed');
        })
    }

    updateClick(){
        fetch(variables.API_URL+'BusSchedules/'+this.state.scheduleId+'/',{
            method: 'PUT',
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                scheduleId: this.state.scheduleId,
                driverId:this.state.driverId,
                conductorId:this.state.conductorId,
                arrivalTime:this.state.arrivalTime,
                departureTime:this.state.departureTime,
                busScheduledNo:this.state.busScheduledNo,
                routeToBeFollowedRouteNo:this.state.routeToBeFollowedRouteNo,
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
            fetch(variables.API_URL+'BusSchedules/'+id,{
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
            modalTitle,
            schedules,
            routes,
            drivers,
            conductors,
            buses,
            scheduleId,
            driverId,
            conductorId,
            arrivalTime,
            departureTime,
            busScheduledNo,
            routeToBeFollowedRouteNo,
        }=this.state;
        return(
            <div>
                <button type="button" 
                className="btn btn-primary m-2 float-end" 
                data-bs-toggle="modal" 
                data-bs-target="#exampleModal" 
                onClick={() => this.addClick()}>
                    Add Schedule    
                </button>"
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>
                                Schedule Id
                            </th>
                            <th>
                                Driver Id
                            </th>
                            <th>
                                Conductor Id
                            </th>
                            <th>
                                Arrival Time
                            </th>
                            <th>
                                Departure Time
                            </th>
                            <th>
                                Bus No
                            </th>
                            <th>
                                Route To Be Followed
                            </th>
                            <th>
                                Options
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {schedules.map(sch=>
                            <tr key={sch.scheduleId}>
                                <td>{sch.scheduleId}</td>
                                <td>{sch.driverId}</td>
                                <td>{sch.conductorId}</td>
                                <td>{sch.arrivalTime}</td>
                                <td>{sch.departureTime}</td>
                                <td>{sch.busScheduledNo}</td>
                                <td>{sch.routeToBeFollowedRouteNo}</td>
                                <td>
                                    <button type="button" 
                                    className="btn btn-light mr-1"
                                    data-bs-toggle="modal"
                                    data-bs-target="#exampleModal"
                                    onClick={() => this.editClick(sch)}
                                    >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                                        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                                        <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                                    </svg>
                                    </button>
                                    <button type="button" 
                                    className="btn btn-light mr-1"
                                    onClick={() => this.deleteClick(sch.scheduleId)}
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
                                    <span className="input-grop-text">Driver </span>
                                    <select className="form-select"
                                    onChange={this.changeDriverId}
                                    value={driverId}>
                                        {drivers.map(d => <option key={d.empId} value={d.empId}>
                                            {d.name}
                                        </option>)}
                                    </select>
                                </div>
                                <div className="input-group mb-3">
                                    <span className="input-grop-text">Conductor </span>
                                    <select className="form-select"
                                    onChange={this.changeConductorId}
                                    value={conductorId}>
                                        {conductors.map(c => <option key={c.empId} value={c.empId}>
                                            {c.name}
                                        </option>)}
                                    </select>
                                </div>
                                <div className="input-group mb-3">
                                    <span className="input-grop-text">Arrival Time</span>
                                    <input type="datetime-local" className="form-control" value={arrivalTime} onChange={this.changeArrivalTime} />
                                </div>
                                <div className="input-group mb-3">
                                    <span className="input-grop-text">Departure Time</span>
                                    <input type="datetime-local" className="form-control" value={departureTime} onChange={this.changeDepartureTime} />
                                </div>
                                <div className="input-group mb-3">
                                    <span className="input-grop-text">Bus No</span>
                                    <select className="form-select"
                                    onChange={this.changeBusScheduled}
                                    value={busScheduledNo}>
                                        {buses.map(b => <option key={b.busNo}>
                                            {b.busNo}
                                        </option>)}
                                    </select>
                                </div>
                                <div className="input-group mb-3">
                                    <span className="input-grop-text">Route No</span>
                                    <select className="form-select"
                                    onChange={this.changeRouteToBeFollowed}
                                    value={routeToBeFollowedRouteNo}>
                                        {routes.map(r => <option key={r.routeNo}>
                                            {r.routeNo}
                                        </option>)}
                                    </select>
                                </div>

                                {scheduleId===0?
                                <button type="button"
                                className="btn btn-primary float-start"
                                onClick={() => this.createClick()}>
                                    Create
                                </button>
                                : null}

                                {scheduleId !== 0?
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