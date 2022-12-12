import React from 'react';

class TechniciansForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        name:'',
        employee_number:''
    }

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleEmployee_NumberChange = this.handleEmployee_NumberChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
}

async handleSubmit(event) {
    event.preventDefault();
    const data = {...this.state}; //might not have to do this... only for FK


    const NewUrl = 'http://localhost:8080/api/technicians/';
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

            name:'',
            employee_number:'',
          };
          this.setState(cleared);
        }
      }

      handleNameChange(event) {
        const value = event.target.value;
        this.setState({name: value})
      }
      handleEmployee_NumberChange(event) {
        const value = event.target.value;
        this.setState({employee_number: value})
      }

      render() {
        return (
        <div className="row">
            <div className="offset-3 col-6">
            <div className="shadow p-4 mt-4">
                <h1>Register Technician</h1>
                <form onSubmit={this.handleSubmit} id="create-technician-form">
                <div className="form-floating mb-3">
                    <input value={this.state.name} onChange={this.handleNameChange} placeholder="Name" required type="text" name="name" id="name" className="form-control"/>
                    <label htmlFor="name">Name</label>
                </div>
                <div className="form-floating mb-3">
                    <input value={this.state.employee_number} onChange={this.handleEmployee_NumberChange} placeholder="Employee Number" required type="text" name="employee_number" id="employee_number" className="form-control"/>
                    <label htmlFor="employee_number">Employee Number</label>
                </div>
                <button className="btn btn-primary">Create</button>
                </form>
            </div>
            </div>
        </div>
        );
    }
}
export default TechniciansForm;
