import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
import ManufacturerForm from './Inventory/ManufacturerForm'
import VehicleModelForm from './Inventory/VehicleModelForm'
import AutoForm from './Inventory/AutoForm'
import ManufacturersList2 from './Inventory/ManufacturersList2'
import AutoList2 from './Inventory/AutoList2'
import VehicleModelList2 from './Inventory/VehicleModelList2'
import SalesPersonList from './Sales/SalesPersonList'
import CustomerList from './Sales/CustomerList'
import SalesList from './Sales/SalesList'
import SalesByID from './Sales/SalesByID'
import SalesPersonForm from './Sales/SalesPersonForm'
import CustomerForm from './Sales/CustomerForm'
import SalesForm from './Sales/SalesForm'
import TechniciansForm from './Service/TechniciansForm';
import TechniciansList from './Service/TechniciansList';
import AppointmentsList from './Service/AppointmentsList';
import AppointmentsForm from './Service/AppointmentsForm';


function App(props) {
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
      <Routes>
        <Route path="service">
          <Route path="technicians-list" element={<TechniciansList />} />
          <Route path="technicians-form" element={<TechniciansForm />} />
          <Route path="appointments-list" element={<AppointmentsList />} />
          <Route path="appointments-form" element={<AppointmentsForm />} />
        </Route>
        <Route path="inventory">
          <Route path="manufacturers-list" element={<ManufacturersList2 />} />
          <Route path="vehicle-model-list" element={<VehicleModelList2 />} />
          <Route path="auto-list" element={<AutoList2 />} />
          <Route path="manufacturer-form" element={<ManufacturerForm />} />
          <Route path="vehicle-model-form" element={<VehicleModelForm />} />
          <Route path="auto-form" element={<AutoForm />} />
        </Route>
          <Route path="sales">
            <Route path="sales-person-form" element={<SalesPersonForm />} />
            <Route path="customer-form" element={<CustomerForm />} />
            <Route path="sales-form" element={<SalesForm />} />
            <Route path="sales-person-list" element={<SalesPersonList />} />
            <Route path="customer-list" element={<CustomerList />} />
            <Route path="sales-list" element={<SalesList />} />
            <Route path="sales-list-by-id" element={<SalesByID />} />
          </Route>
          <Route path="/" element={<MainPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
