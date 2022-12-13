import React from 'react';

class SalesByID extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        sales:[],
        manufacturers:[]
    }
    this.handleSalesChange = this.handleSalesChange.bind(this);
    this.handleManufacturerChange = this.handleManufacturerChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
}

async handleSubmit(event) {
    event.preventDefault();
    const data = {...this.state};
    data.sales_person = data.manufacturer;
    delete data.manufacturer;
    delete data.manufacturers;

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
          const cleared = {
            sales: data.sales,
            manufacturer:''
          };
          this.setState(cleared);
        }
      }
    handleManufacturerChange(event) {
        const value = event.target.value;
        this.setState({manufacturer: value})
    }
    handleManufacturerChange(event) {
        const value = event.target.value;
        this.setState({manufacturer: value})
    }
    async componentDidMount() {
        const url = 'http://localhost:8090/api/sales_rest/sales_person/';

        const response = await fetch(url);

        if (response.ok) {
          const data = await response.json();
          this.setState({manufacturers: data.sales_person});
        }
      }

    render() {
        console.log(this.state)
        return (
        <div className="row">
            <div className="offset-3 col-6">
            <div className="shadow p-4 mt-4">
                <h1>Register New Vehicle Model</h1>
                <form onSubmit={this.handleSubmit} id="create-vehicle-form">
                <div className="mb-3">
                <select value={this.state.manufacturer} onChange={this.handleManufacturerChange} required name="manufacturer" id="manufacturer" className="form-select">
                  <option value="">Choose an employee</option>
                  {this.state.manufacturers.map(manufacturer => {
                    return (
                      <option key={manufacturer.id} value={manufacturer.id}>
                        {manufacturer.name}
                      </option>
                    );
                  })}
                </select>
              </div>
                <button className="btn btn-primary">Search</button>
                </form>
            </div>
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
                    </table>
            </div>
        </div>
        );
    }
}
export default SalesByID;