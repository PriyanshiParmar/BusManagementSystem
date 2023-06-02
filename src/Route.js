// import React, {Component, useState} from 'react';
// import { variables } from "./Variables.js";

// export function BusRoute(props){
    
//     const [routes, setRoutes] = useState([]);
//         const [modalTitle, setModalTitle] = useState("");
//         const [routeNo, setRouteNo] = useState(0);
//         const [noOfStops, setNoOfStops] = useState(0);
//         const [stops, setStops] = useState([]);
//         const [begStopNo, setBegStopNo] = useState("");
//         const [endStopNo, setEndStopNo] = useState("");

//     constructor(props){
//         super(props);


//         // this.state={
//         //     routes:[],
//         //     modalTitle:"",
//         //     routeNo:0,
//         //     noOfStops:0,
//         //     stops:[],
//         //     begStopNo:"",
//         //     endStopNo:"",
//         // }
//     }

//     refreshList(){

//         fetch(variables.API_URL+'BusStops')
//         .then(response=>response.json())
//         .then(data=>{
//             this.setState({stops: data});
//         });

//         fetch(variables.API_URL+'Routes')
//         .then(response=>response.json())
//         .then(data=>{
//             this.setState({routes: data});
//         });
//     }

//     componentDidMount(){
//         this.refreshList();
//     }

//     changenoOfStops =  (b)=>{
//         this.setState({noOfStops: b.target.value});
//     }

//     changebegStopNo =  (b)=>{
//         this.setState({begStopNo: b.target.value});
//     }

//     changeEndStopNo =  (b)=>{
//         this.setState({endStopNo: b.target.value});
//     }

//     addClick(){
//         this.setState({
//             modalTitle:"Add Route",
//             routeNo:0,
//             noOfStops:0,
//             begStopNo:"",
//             endStopNo:"",
//         });
//     }

//     editClick(route){
//         this.setState({
//             modalTitle: "Edit Route Details",
//             routeNo: route.routeNo,
//             noOfStops: route.noOfStops,
//             begStopNo: route.begStopNo,
//             endStopNo: route.endStopNo,
//         })
//     }

//     createClick(){
//         // let variable = JSON.stringify({
//         //     noOfStops: this.state.noOfStops,
//         //     begStopNo: this.state.begStopNo,
//         //     endStopNo: this.state.endStopNo,
//         // });
//         // console.log(variable);
//         fetch(variables.API_URL+'Routes',{
//             method: 'POST',
//             headers:{
//                 'Accept': 'application/json',
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({
//                 noOfStops: this.state.noOfStops,
//                 begStopNo: this.state.begStopNo,
//                 endStopNo: this.state.endStopNo,
//             })
//         })
//         .then(res => res.json())
//         .then((result) => {
//             alert("Added Successfully");
//             this.refreshList();
//         }, (error) => {
//             alert('Failed');
//         })
//     }

//     updateClick(){
//         fetch(variables.API_URL+'Routes/'+this.state.routeNo+'/',{
//             method: 'PUT',
//             headers:{
//                 'Accept': 'application/json',
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify({
//                 routeNo: this.state.routeNo,
//                 noOfStops: this.state.noOfStops,
//                 begStopNo: this.state.begStopNo,
//                 endStopNo: this.state.endStopNo,
//             }),
//         })
//         .then(res => {res.json(); console.log('Success')})
//         .then((result) => {
//             alert('Updated Successfully');
//             this.refreshList();
//         }, (error) => {
//             alert(error);
//         })
//     }

//     deleteClick(id){
//         if(window.confirm('Are you sure?')){
//             fetch(variables.API_URL+'Routes/'+id,{
//                 method: 'DELETE',
//                 headers:{
//                     'Accept': 'application/json',
//                     'Content-Type': 'application/json',
//                 }
//             })
//             .then(res => {res.json(); console.log('Success')})
//             .then((result) => {
//                 alert('Deleted Successfully');
//                 this.refreshList();
//             }, (error) => {
//                 alert(error);
//             })
//         }
        
//     }

//     getStopName(id){
//         const data =  fetch(variables.API_URL+'BusStops/'+id,{
//             method: 'GET',
//             headers:{
//                 'Accept': 'application/json',
//                 'Content-Type': 'application/json',
//             }
//         })
//         .then(res => {console.log(res.json())}
//             , (error) => {
//                 alert(error);
//             })

//         console.log(data)

//     }

//     render(){
//         const {
//             routes,
//             stops,
//             modalTitle,
//             routeNo,
//             begStopNo,
//             endStopNo,
//             noOfStops,
//         }=this.state;
//         return(
//             // console.log(this.getStopName(8));
//             <div>
//                 <button type="button" 
//                 className="btn btn-primary m-2 float-end" 
//                 data-bs-toggle="modal" 
//                 data-bs-target="#exampleModal" 
//                 onClick={() => this.addClick()}>
//                     Add Route    
//                 </button>"
//                 <table className="table table-striped">
//                     <thead>
//                         <tr>
//                             <th>
//                                 Route Number
//                             </th>
//                             <th>
//                                 No of Stops
//                             </th>
//                             <th>
//                                 Beginning stop
//                             </th>
//                             <th>
//                                 Ending Stop
//                             </th>
//                             <th>
//                                 Options
//                             </th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {routes.map(route=>
//                             <tr key={route.routeNo}>
//                                 <td>{route.routeNo}</td>
//                                 <td>{route.noOfStops}</td>
//                                 <td onClick={() => this.getStopName(route.begStopNo)}>{route.begStopNo}
//                                 </td>
//                                 <td>{route.endStopNo}</td>
//                                 <td>
//                                     <button type="button" 
//                                     className="btn btn-light mr-1"
//                                     data-bs-toggle="modal"
//                                     data-bs-target="#exampleModal"
//                                     onClick={() => this.editClick(route)}
//                                     >
//                                     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
//                                         <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
//                                         <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
//                                     </svg>
//                                     </button>
//                                     <button type="button" 
//                                     className="btn btn-light mr-1"
//                                     onClick={() => this.deleteClick(route.routeNo)}
//                                     >
//                                     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash-fill" viewBox="0 0 16 16">
//                                         <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
//                                     </svg>
//                                     </button>
//                                 </td>
//                             </tr>
//                             )}
//                     </tbody>
//                 </table>

//                 <div className="modal fade" id="exampleModal" tabIndex="-1" aria-hidden="true">
//                     <div className="modal-dialog modal-lg modal-dialog-centered">
//                         <div className="modal-content">
//                             <div className="modal-header">
//                                 <h5 className="modal-title">{modalTitle}</h5>
//                                 <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//                             </div>
//                             <div className="modal-body">
//                                 <div className="input-group mb-3">
//                                     <span className="input-grop-text">No of stops</span>
//                                     <input type="number" className="form-control" value={noOfStops} onChange={this.changenoOfStops} />
//                                 </div>
//                                 <div className="input-group mb-3">
//                                     <span className="input-grop-text">Beginning Stop</span>
//                                     <select className="form-select"
//                                     onChange={this.changebegStopNo}
//                                     value={begStopNo}>
//                                         {stops.map(s => <option key={s.stopNo} value={s.stopNo}>
//                                             {s.stopName}
//                                         </option>)}
//                                     </select>
//                                 </div>
//                                 <div className="input-group mb-3">
//                                     <span className="input-grop-text">Ending Stop</span>
//                                     <select className="form-select"
//                                     onChange={this.changeEndStopNo}
//                                     >
//                                         {stops.map(s => <option key={s.stopNo} value={s.stopNo}>
//                                             {s.stopName}
//                                         </option>)}
//                                     </select>
//                                 </div>
//                                 {routeNo===0?
//                                 <button type="button"
//                                 className="btn btn-primary float-start"
//                                 onClick={() => this.createClick()}>
//                                     Create
//                                 </button>
//                                 : null}

//                                 {routeNo !== 0?
//                                 <button type="button"
//                                 className="btn btn-primary float-start"
//                                 onClick={() => this.updateClick()}>
//                                     Update
//                                 </button>
//                                 : null}
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//             </div>
//         )
//     }
// }

import React, {Component} from 'react';
import { variables } from "./Variables.js";

export class BusRoute extends Component{
    
    constructor(props){
        super(props);

        this.state={
            routes:[],
            modalTitle:"",
            routeNo:0,
            noOfStops:0,
            stops:[],
            begStopNo:"",
            endStopNo:"",
        }
    }

    refreshList(){

        fetch(variables.API_URL+'BusStops')
        .then(response=>response.json())
        .then(data=>{
            this.setState({stops: data});
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

    changenoOfStops =  (b)=>{
        this.setState({noOfStops: b.target.value});
    }

    changebegStopNo =  (b)=>{
        this.setState({begStopNo: b.target.value});
    }

    changeEndStopNo =  (b)=>{
        this.setState({endStopNo: b.target.value});
    }

    addClick(){
        this.setState({
            modalTitle:"Add Route",
            routeNo:0,
            noOfStops:0,
            begStopNo:"",
            endStopNo:"",
        });
    }

    editClick(route){
        this.setState({
            modalTitle: "Edit Route Details",
            routeNo: route.routeNo,
            noOfStops: route.noOfStops,
            begStopNo: route.begStopNo,
            endStopNo: route.endStopNo,
        })
    }

    createClick(){
        fetch(variables.API_URL+'Routes',{
            method: 'POST',
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                noOfStops: this.state.noOfStops,
                begStopNo: this.state.begStopNo,
                endStopNo: this.state.endStopNo,
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
        fetch(variables.API_URL+'Routes/'+this.state.routeNo+'/',{
            method: 'PUT',
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                routeNo: this.state.routeNo,
                noOfStops: this.state.noOfStops,
                begStopNo: this.state.begStopNo,
                endStopNo: this.state.endStopNo,
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
            fetch(variables.API_URL+'Routes/'+id,{
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
            routes,
            stops,
            modalTitle,
            routeNo,
            begStopNo,
            endStopNo,
            noOfStops,
        }=this.state;
        return(
            <div>
                <button type="button" 
                className="btn btn-primary m-2 float-end" 
                data-bs-toggle="modal" 
                data-bs-target="#exampleModal" 
                onClick={() => this.addClick()}>
                    Add Route    
                </button>"
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>
                                Route Number
                            </th>
                            <th>
                                No of Stops
                            </th>
                            <th>
                                Beginning stop
                            </th>
                            <th>
                                Ending Stop
                            </th>
                            <th>
                                Options
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {routes.map(route=>
                            <tr key={route.routeNo}>
                                <td>{route.routeNo}</td>
                                <td>{route.noOfStops}</td>
                                <td>{route.begStopNo}</td>
                                <td>{route.endStopNo}</td>
                                <td>
                                    <button type="button" 
                                    className="btn btn-light mr-1"
                                    data-bs-toggle="modal"
                                    data-bs-target="#exampleModal"
                                    onClick={() => this.editClick(route)}
                                    >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                                        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                                        <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                                    </svg>
                                    </button>
                                    <button type="button" 
                                    className="btn btn-light mr-1"
                                    onClick={() => this.deleteClick(route.routeNo)}
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
                                    <span className="input-grop-text">No of stops</span>
                                    <input type="number" className="form-control" value={noOfStops} onChange={this.changenoOfStops} />
                                </div>
                                <div className="input-group mb-3">
                                    <span className="input-grop-text">Beginning Stop</span>
                                    <select className="form-select"
                                    onChange={this.changebegStopNo}
                                    value={begStopNo}>
                                        {stops.map(s => <option key={s.stopNo} value={s.stopNo} required>
                                            {s.stopName}
                                        </option>)}
                                    </select>
                                </div>
                                <div className="input-group mb-3">
                                    <span className="input-grop-text">Ending Stop</span>
                                    <select className="form-select" onChange={this.changeEndStopNo} required>
                                        {stops.map(s => <option key={s.stopNo} value={s.stopNo}>
                                            {s.stopName}
                                        </option>)}
                                    </select>
                                </div>
                                {routeNo===0?
                                <button type="button"
                                className="btn btn-primary float-start"
                                onClick={() => this.createClick()}>
                                    Create
                                </button>
                                : null}

                                {routeNo !== 0?
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
