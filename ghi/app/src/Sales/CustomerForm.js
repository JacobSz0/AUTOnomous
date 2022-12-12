import React from 'react';

class CustomerForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        name:'',
        address:'',
        phone:''
    }

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleAddressChange = this.handleAddressChange.bind(this);
    this.handlePhoneChange = this.handlePhoneChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
}

async handleSubmit(event) {
    event.preventDefault();
    const data = {...this.state};

    const NewUrl = 'http://localhost:8090/api/sales_rest/customer/';
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
            address:'',
            phone:''
          };
          this.setState(cleared);
        }
      }

    handleNameChange(event) {
        const value = event.target.value;
        this.setState({name: value})
    }
    handleAddressChange(event) {
      const value = event.target.value;
      this.setState({address: value})
    }
    handlePhoneChange(event) {
      const value = event.target.value;
      this.setState({phone: value})
    }

    render() {
        return (
        <div className="row">
            <div className="offset-3 col-6">
            <div className="shadow p-4 mt-4">
                <h1>Register New Customer</h1>
                <form onSubmit={this.handleSubmit} id="create-customer-form">
                <div className="form-floating mb-3">
                    <input value={this.state.name} onChange={this.handleNameChange} placeholder="Name" required type="text" name="name" id="name" className="form-control"/>
                    <label htmlFor="name">Name</label>
                </div>
                <div className="form-floating mb-3">
                    <input value={this.state.address} onChange={this.handleAddressChange} placeholder="Address" required type="text" name="address" id="address" className="form-control"/>
                    <label htmlFor="address">Address</label>
                </div>
                <div className="form-floating mb-3">
                    <input value={this.state.phone} onChange={this.handlePhoneChange} placeholder="Phone Number" required type="text" name="phone" id="phone" className="form-control"/>
                    <label htmlFor="phone">Phone Number</label>
                </div>
                <button className="btn btn-primary">Create</button>
                </form>
            </div>
            </div>
        </div>
        );
    }
}
export default CustomerForm;