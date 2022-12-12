import React from 'react';

class SalesPersonForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        name:'',
        employee_id:''
    }

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleEmpIDChange = this.handleEmpIDChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
}

async handleSubmit(event) {
    event.preventDefault();
    const data = {...this.state};

    const NewUrl = 'http://localhost:8090/api/sales_rest/sales_person/';
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
            name: '',
            employee_id: ''
          };
          this.setState(cleared);
        }
      }

    handleNameChange(event) {
        const value = event.target.value;
        this.setState({name: value})
    }
    handleEmpIDChange(event) {
      const value = event.target.value;
      this.setState({employee_id: value})
    }

    render() {
        return (
        <div className="row">
            <div className="offset-3 col-6">
            <div className="shadow p-4 mt-4">
                <h1>Register New Employee</h1>
                <form onSubmit={this.handleSubmit} id="create-salesperson-form">
                <div className="form-floating mb-3">
                    <input value={this.state.name} onChange={this.handleNameChange} placeholder="Name" required type="text" name="name" id="name" className="form-control"/>
                    <label htmlFor="name">Name</label>
                </div>
                <div className="form-floating mb-3">
                    <input value={this.state.employee_id} onChange={this.handleEmpIDChange} placeholder="Employee ID" required type="text" name="employee_id" id="employee_id" className="form-control"/>
                    <label htmlFor="employee_id">Employee ID</label>
                </div>
                <button className="btn btn-primary">Create</button>
                </form>
            </div>
            </div>
        </div>
        );
    }
}
export default SalesPersonForm;