import React from 'react';

class AppointmentsForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        vin:'',
        customer_name:'',
        date:'',
        technician_name:[],
        reason:'',
        in_inventory:[],
    }

    this.handleVinChange = this.handleVinChange.bind(this); // comeback
    this.handleCustomer_NameChange = this.handleCustomer_NameChange.bind(this);
    this.handleTechnician_NameChange = this.handleTechnician_NameChange.bind(this);
    this.handleReasonChange = this.handleReasonChange.bind(this);
    this.handleIn_InventoryChange = this.handleIn_InventoryChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
}

async handleSubmit(event) {
    event.preventDefault();
    const data = {...this.state}; // what does this do?
    delete data.technician_name;
    delete data.customer_name;

    delete data.in_inventory;


    const NewUrl = 'http://localhost:8080/api/appointments/';
    const fetchConfig = {
      method: "post",
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const response = await fetch(NewUrl, fetchConfig);
        if (response.ok) {
          await response.json();
          const cleared = {

            vin:'', // come back
            customer:'',
            date:'',
            technician:'',
            reason:'',
            in_inventory:'',
          };
          this.setState(cleared);
        }
      }

      handleVinChange(event) {
        const value = event.target.value;
        this.setState({vin: value})
      }
      handleCustomer_NameChange(event) {
        const value = event.target.value;
        this.setState({customer: value})
      }
      handleDateChange(event) {
        const value = event.target.value;
        this.setState({date: value})
      }
      handleTechnician_NameChange(event) {
        const value = event.target.value;
        this.setState({technician: value})
      }
      handleReasonChange(event) {
        const value = event.target.value;
        this.setState({reason: value})
      }
      handleIn_InventoryChange(event) {
        const value = event.target.value;
        this.setState({in_inventory: value})
      }
    async componentDidMount() {
        const Technicianurl = 'http://localhost:8080/api/technicians/';

        const response = await fetch(Technicianurl);

        if (response.ok) {
          const data = await response.json();

          this.setState({technicians: data.technicians});
        }
      }

    render() {
      console.log(this.state.technicians)
        return (
        <div className="row">
            <div className="offset-3 col-6">
            <div className="shadow p-4 mt-4">
                <h1>Create New Appointment</h1>

                <form onSubmit={this.handleSubmit} id="create-appointment-form">
                <div className="form-floating mb-3">
                    <input value={this.state.vin} onChange={this.handleVinChange}
                     placeholder="VIN" required type="text" name="vin" id="vin" className="form-control"/>
                    <label htmlFor="vin">VIN</label>
                </div>

                <div className="form-floating mb-3">
                    <input value={this.state.customer} onChange={this.handleCustomer_NameChange}
                     placeholder="customer_name" required type="text" name="customer_name" id="customer_name" className="form-control"/>
                    <label htmlFor="customer_name">Customer Name</label>
                </div>

                <div className="form-floating mb-3">
                    <input value={this.state.date} onChange={this.handleDateChange}
                     placeholder="Date" required type="date" name="Date" id="Date" className="form-control"/>
                    <label htmlFor="Date">Date</label>
                </div>


                <div className="mb-3">
                   <select value={this.state.reason} onChange={this.handleReasonChange}
                    required name="reason" id="reason" className="form-select">
                      <option value="">Choose a Reason</option>
                      <option value="Oil Change">"Oil Change"</option>
                      <option value="Radiator Flush">"Radiator Flush"</option>
                      <option value="40 point inspection">"40 point inspection"</option>
                    </select>
                </div>


              <div className="mb-3">
                  <select value={this.state.technician} onChange={this.handleTechnician_NameChange}
                  required name="technician" id="technician" className="form-select">
                    <option value="">Choose a Technician</option>
                    {this.state.technician_name.map(technician => {
                      return (
                        <option key={technician.id} value={technician.id}> // what's the key?
                          {technician.name}
                        </option>
                      );
                    })}
                  </select>
                </div>


                <button className="btn btn-primary">Create</button>
                </form>
            </div>
            </div>
        </div>
        );
    }
}
export default AppointmentsForm;
