import { useState } from 'react';
import { NavLink } from 'react-router-dom';

function Nav() {
  const [drop1, setDrop1] = useState(false)
  const [drop2, setDrop2] = useState(false)
  const [drop3, setDrop3] = useState(false)
  const [drop4, setDrop4] = useState(false)
  const [drop5, setDrop5] = useState(false)
  const [drop6, setDrop6] = useState(false)

  function doDrop1(){
    if (drop1===true){
      setDrop1(false)
    }
    if (drop1===false){
      setDrop1(true)
    }
  }
  function doDrop2(){
    if (drop2===true){
      setDrop2(false)
    }
    if (drop2===false){
      setDrop2(true)
    }
  }
  function doDrop3(){
    if (drop3===true){
      setDrop3(false)
    }
    if (drop3===false){
      setDrop3(true)
    }
  }
  function doDrop4(){
    if (drop4===true){
      setDrop4(false)
    }
    if (drop4===false){
      setDrop4(true)
    }
  }
  function doDrop5(){
    if (drop5===true){
      setDrop5(false)
    }
    if (drop5===false){
      setDrop5(true)
    }
  }
  function doDrop6(){
    if (drop6===true){
      setDrop6(false)
    }
    if (drop6===false){
      setDrop6(true)
    }
  }


  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">AUTOnomous</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <button onClick={doDrop1}>Inventory Lists</button>
        <button onClick={doDrop2}>Inventory Create</button>
        <button onClick={doDrop3}>Sales Lists</button>
        <button onClick={doDrop4}>Sales Create</button>
        <button onClick={doDrop5}>Service Lists</button>
        <button onClick={doDrop6}>Service Create</button>

      </div>
    </nav>

        {drop1 ? (
        <div style={{backgroundColor: "#39005E"}} >
        <NavLink className="nav-link" aria-current="page" to="/inventory/manufacturers-list">
          Manufacturers List
        </NavLink>
        <NavLink className="nav-link" aria-current="page" to="/inventory/vehicle-model-list">
          Vehicle Model List
        </NavLink>
        <NavLink className="nav-link" aria-current="page" to="/inventory/auto-list">
          Auto List
        </NavLink>
        </div>
        ) : null }

      {drop2 ? (
        <div style={{backgroundColor: "#39005E"}} >
        <NavLink className="nav-link" aria-current="page" to="/inventory/manufacturer-form">
          Manufacturer Form
        </NavLink>
        <NavLink className="nav-link" aria-current="page" to="/inventory/vehicle-model-form">
          Vehicle Model Form
        </NavLink>
        <NavLink className="nav-link" aria-current="page" to="/inventory/auto-form">
          AutoForm
        </NavLink>
        </div>
      ) : null }

      {drop3 ? (
        <div style={{backgroundColor: "#05045F"}} >
        <NavLink className="nav-link" aria-current="page" to="/sales/sales-person-form">
          Sales Person Form
        </NavLink>
        <NavLink className="nav-link" aria-current="page" to="/sales/customer-form">
          Customer Form
        </NavLink>
        <NavLink className="nav-link" aria-current="page" to="/sales/sales-form">
          Sales Form
        </NavLink>
        </div>
      ) : null }

      {drop4 ? (
      <div style={{backgroundColor: "#05045F"}} >
        <NavLink className="nav-link" aria-current="page" to="/sales/sales-person-list">
          Sales Person List
        </NavLink>
        <NavLink className="nav-link" aria-current="page" to="/sales/customer-list">
          CustomerList
        </NavLink>
        <NavLink className="nav-link" aria-current="page" to="/sales/sales-list">
          Sales List
        </NavLink>
        <NavLink className="nav-link" aria-current="page" to="/sales/sales-list-by-id">
          Sales List by Employee ID (Almost)
        </NavLink>
      </div>
      ) : null }

      {drop5 ? (
        <div style={{backgroundColor: "#0081AE"}} >
        <NavLink className="nav-link" aria-current="page" to="/service/technicians-list">
          List Technicians
        </NavLink>
        <NavLink className="nav-link" aria-current="page" to="/service/appointments-list">
          List Appointments
        </NavLink>
        </div>
      ) : null }

      {drop6 ? (
        <div style={{backgroundColor: "#0081AE"}} >
        <NavLink className="nav-link" aria-current="page" to="/service/technicians-form">
          Add Technician
        </NavLink>
        <NavLink className="nav-link" aria-current="page" to="/service/appointments-form">
          Add Appointment
        </NavLink>
        </div>
      ) : null }
  )
}

export default Nav;
