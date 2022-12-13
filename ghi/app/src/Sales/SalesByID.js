import React from 'react';

class SalesByID extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        sales_persons:[]
    }

    this.handleManufacturerChange = this.handleManufacturerChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
}

async handleSubmit(event) {
    event.preventDefault();
    const data = {...this.state};
    delete data.sales_persons;

    const NewUrl = 'http://localhost:8090/api/sales_rest/sales_id/';
    const fetchConfig = {
      method: "post",
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const response = await fetch(NewUrl, fetchConfig);
        if (response.ok) {
          const data = await response.json();
          console.log(data)
          console.log("I was SO close to getting this one!")
          const cleared = {
            sales: data.sales,
            sales_person:''
          };
          this.setState(cleared);
        }
      }
    handleSalesChange(event) {
        const value = event.target.value;
        this.setState({sales: value})
    }
    handleManufacturerChange(event) {
        const value = event.target.value;
        this.setState({sales_person: value})
    }
    async componentDidMount() {
        const url = 'http://localhost:8090/api/sales_rest/sales_person/';

        const response = await fetch(url);

        if (response.ok) {
          const data = await response.json();
          this.setState({sales_persons: data.sales_person});
        }
      }

    render() {
        return (
        <div className="row">
            <div className="offset-3 col-6">
            <div className="shadow p-4 mt-4">
                <h1>Register New Vehicle Model</h1>
                <form onSubmit={this.handleSubmit} id="create-vehicle-form">
                <div className="mb-3">
                <select value={this.state.sales_person} onChange={this.handleManufacturerChange} required name="sales_person" id="sales_person" className="form-select">
                  <option value="">Choose an employee</option>
                  {this.state.sales_persons.map(sales_person => {
                    return (
                      <option key={sales_person.id} value={sales_person.id}>
                        {sales_person.name}
                      </option>
                    );
                  })}
                </select>
              </div>
                <button className="btn btn-primary">Search</button>
                </form>
            </div>
            {/*
            <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>Name</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.sales.map(sale => {
                                return (
                                    <tr key={sale.id}>
                                        <td>{ sale.price }</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table> */}
            </div>
        </div>
        );
    }
}
export default SalesByID;