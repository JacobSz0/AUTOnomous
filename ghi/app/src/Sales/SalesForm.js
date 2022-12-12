import React from 'react';

class SalesForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        autos:[],
        sales_persons:[],
        customers:[],
        price:""
    }

    this.handleAutoChange = this.handleAutoChange.bind(this);
    this.handleSalesPersonChange = this.handleSalesPersonChange.bind(this);
    this.handleCustomerChange = this.handleCustomerChange.bind(this);
    this.handlePriceChange = this.handlePriceChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
}

async handleSubmit(event) {
    event.preventDefault();
    const data = {...this.state};
    delete data.sales_persons
    delete data.autos;
    delete data.customers;
    const NewUrl = 'http://localhost:8090/api/sales_rest/sales/';
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

            auto:"",
            sales_person:"",
            customer:"",
            price:""
          };
          this.setState(cleared);
        }
      }

      handleAutoChange(event) {
        const value = event.target.value;
        this.setState({auto: value})
      }
      handleSalesPersonChange(event) {
        const value = event.target.value;
        this.setState({sales_person: value})
      }
      handleCustomerChange(event) {
        const value = event.target.value;
        this.setState({customer: value})
      }
      handlePriceChange(event) {
        const value = event.target.value;
        this.setState({price: value})
      }
    async componentDidMount() {
        const Autourl = 'http://localhost:8100/api/automobiles/';
        const Emploeeurl = 'http://localhost:8090/api/sales_rest/sales_person/';
        const Customerurl = 'http://localhost:8090/api/sales_rest/customer/'

        const response = await fetch(Autourl);
        const response2 = await fetch(Emploeeurl);
        const response3 = await fetch(Customerurl);

        if (response.ok) {
          var data = await response.json();
        }
        if (response2.ok) {
          var data2 = await response2.json();
        }
        if (response3.ok) {
          var data3 = await response3.json();
          this.setState({autos: data.autos, sales_persons: data2.sales_person, customers: data3.customer});

            }
      }

    render() {
        return (
        <div className="row">
            <div className="offset-3 col-6">
            <div className="shadow p-4 mt-4">
                <h1>Register New Vehicle Model</h1>
                <form onSubmit={this.handleSubmit} id="create-sale-form">

                <div className="mb-3">
                  <select value={this.state.auto} onChange={this.handleAutoChange} required name="auto" id="auto" className="form-select">
                    <option value="">Choose a Car</option>
                    {this.state.autos.map(auto => {
                      return (
                        <option key={auto.href} value={auto.href}>
                          {auto.vin}
                        </option>
                      );
                    })}
                  </select>
                </div>

                <div className="mb-3">
                  <select value={this.state.sales_person} onChange={this.handleSalesPersonChange} required name="sales_person" id="sales_person" className="form-select">
                    <option value="">Choose an Employee</option>
                    {this.state.sales_persons.map(sales_person => {
                      return (
                        <option key={sales_person.id} value={sales_person.id}>
                          {sales_person.name}
                        </option>
                      );
                    })}
                  </select>
                </div>

                <div className="mb-3">
                  <select value={this.state.customer} onChange={this.handleCustomerChange} required name="customer" id="customer" className="form-select">
                    <option value="">Choose a Customer</option>
                    {this.state.customers.map(customer => {
                      return (
                        <option key={customer.id} value={customer.id}>
                          {customer.name}
                        </option>
                      );
                    })}
                  </select>
                </div>

                <div className="form-floating mb-3">
                    <input value={this.state.price} onChange={this.handlePriceChange} placeholder="Price" required type="text" name="price" id="price" className="form-control"/>
                    <label htmlFor="price">Price</label>
                </div>

                <button className="btn btn-primary">Create</button>
                </form>
            </div>
            </div>
        </div>
        );
    }
}
export default SalesForm;