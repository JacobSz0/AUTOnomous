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
      setDrop2(false)
      setDrop3(false)
      setDrop4(false)
      setDrop5(false)
      setDrop6(false)
    }
  }
  function doDrop2(){
    if (drop2===true){
      setDrop2(false)
    }
    if (drop2===false){
      setDrop1(false)
      setDrop2(true)
      setDrop3(false)
      setDrop4(false)
      setDrop5(false)
      setDrop6(false)
    }
  }
  function doDrop3(){
    if (drop3===true){
      setDrop3(false)
    }
    if (drop3===false){
      setDrop1(false)
      setDrop2(false)
      setDrop3(true)
      setDrop4(false)
      setDrop5(false)
      setDrop6(false)
    }
  }
  function doDrop4(){
    if (drop4===true){
      setDrop4(false)
    }
    if (drop4===false){
      setDrop1(false)
      setDrop2(false)
      setDrop3(false)
      setDrop4(true)
      setDrop5(false)
      setDrop6(false)
    }
  }
  function doDrop5(){
    if (drop5===true){
      setDrop5(false)
    }
    if (drop5===false){
      setDrop1(false)
      setDrop2(false)
      setDrop3(false)
      setDrop4(false)
      setDrop5(true)
      setDrop6(false)
    }
  }
  function doDrop6(){
    if (drop6===true){
      setDrop6(false)
    }
    if (drop6===false){
      setDrop1(false)
      setDrop2(false)
      setDrop3(false)
      setDrop4(false)
      setDrop5(false)
      setDrop6(true)
    }
  }


  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-success">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">AUTOnomous</NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <button style={{backgroundColor: "#39005E", color: "white"}} onClick={doDrop1}>Inventory Lists</button>
          <button style={{backgroundColor: "#39005E", color: "white"}} onClick={doDrop2}>Inventory Create</button>
          <button style={{backgroundColor: "#05045F", color: "white"}} onClick={doDrop3}>Sales Lists</button>
          <button style={{backgroundColor: "#05045F", color: "white"}} onClick={doDrop4}>Sales Create</button>
          <button style={{backgroundColor: "#0060AE", color: "white"}} onClick={doDrop5}>Service Lists</button>
          <button style={{backgroundColor: "#0060AE", color: "white"}} onClick={doDrop6}>Service Create</button>
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
          <div style={{backgroundColor: "#0060AE"}} >
          <NavLink className="nav-link" aria-current="page" to="/service/technicians-list">
            List Technicians
          </NavLink>
          <NavLink className="nav-link" aria-current="page" to="/service/appointments-list">
            List Appointments
          </NavLink>
          </div>
        ) : null }

        {drop6 ? (
          <div style={{backgroundColor: "#0060AE"}} >
          <NavLink className="nav-link" aria-current="page" to="/service/technicians-form">
            Add Technician
          </NavLink>
          <NavLink className="nav-link" aria-current="page" to="/service/appointments-form">
            Add Appointment
          </NavLink>
          </div>
        ) : null }
      </div>
  )
}

export default Nav;
