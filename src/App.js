// import logo from './logo.svg';
import './App.css';
import {Bus} from './Bus';
import {BusStop} from './BusStop';
import {Conductor} from './Conductor';
import { Driver } from "./Driver";
import { BusRoute } from "./Route";
import { Schedule } from "./Schedule";
import { Home } from "./Home";
import { BrowserRouter, Route, Routes, NavLink } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <div className="App container">
      <a href = "/">
        <h3 className="d-flex justify-content-center m-3">
          Bus Management System
        </h3>
      </a>

      <nav className="navbar navbar-expand-sm bg-light navbar-dark">
      <ul className="navbar-nav">
        <li className="nav-item m-2">
          <NavLink className="btn btn-light btn-outline-primary" to="/bus">
              Bus
          </NavLink>
        </li>
        <li className="nav-item m-2">
          <NavLink className="btn btn-light btn-outline-primary" to="/busStop">
              Bus Stop
          </NavLink>
        </li>
        <li className="nav-item m-2">
          <NavLink className="btn btn-light btn-outline-primary" to="/conductor">
              Conductor
            </NavLink>
        </li>
        <li className="nav-item m-2">
          <NavLink className="btn btn-light btn-outline-primary" to="/driver">
              Driver
            </NavLink>
        </li>
        <li className="nav-item m-2">
          <NavLink className="btn btn-light btn-outline-primary" to="/route">
              Route
            </NavLink>
        </li>
        <li className="nav-item m-2">
          <NavLink className="btn btn-light btn-outline-primary" to="/schedule">
              Schedule
            </NavLink>
        </li>
      </ul>
      
    </nav>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/bus" element={<Bus />} />
        <Route path="/busStop" element={<BusStop />} />
        <Route path="/conductor" element={<Conductor />} />
        <Route path="/driver" element={<Driver />} />
        <Route path="/route" element={<BusRoute />} />
        <Route path="/schedule" element={<Schedule />} />
      </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;
