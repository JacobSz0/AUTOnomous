import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">CarCar</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
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
        </div>
        <div style={{backgroundColor: "#05045F"}} >
        <NavLink className="nav-link" aria-current="page" to="/sales/sales-list-by-id">
          Sales List by Employee ID (Almost)
        </NavLink>
        </div>


        <div style={{backgroundColor: "#0081AE"}} >
        <NavLink className="nav-link" aria-current="page" to="/service/technicians-list">
          List Technicians
        </NavLink>
        <NavLink className="nav-link" aria-current="page" to="/service/appointments-list">
          List Appointments
        </NavLink>

        </div>

        <div style={{backgroundColor: "#0081AE"}} >
        <NavLink className="nav-link" aria-current="page" to="/service/technicians-form">
          Add Technician
        </NavLink>
        <NavLink className="nav-link" aria-current="page" to="/service/appointments-form">
          Add Appointment
        </NavLink>

        </div>


        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Nav;
