import React from 'react';

class VehicleModelForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        name:'',
        picture_url:'',
        manufacturers:[]
    }

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handlePictureChange = this.handlePictureChange.bind(this);
    this.handleManufacturerChange = this.handleManufacturerChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
}

async handleSubmit(event) {
    event.preventDefault();
    const data = {...this.state};
    data.manufacturer_id = data.manufacturer;
    delete data.manufacturer;
    delete data.manufacturers;

    const NewUrl = 'http://localhost:8100/api/models/';
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
            picture_url:'',
            manufacturer:''
          };
          this.setState(cleared);
        }
      }

    handleNameChange(event) {
        const value = event.target.value;
        this.setState({name: value})
    }
    handlePictureChange(event) {
        const value = event.target.value;
        this.setState({picture_url: value})
    }
    handleManufacturerChange(event) {
        const value = event.target.value;
        this.setState({manufacturer: value})
    }
    async componentDidMount() {
        const url = 'http://localhost:8100/api/manufacturers/';

        const response = await fetch(url);

        if (response.ok) {
          const data = await response.json();
          this.setState({manufacturers: data.manufacturers});
        }
      }

    render() {
        return (
        <div className="row">
            <div className="offset-3 col-6">
            <div className="shadow p-4 mt-4">
                <h1>Register New Vehicle Model</h1>
                <form onSubmit={this.handleSubmit} id="create-vehicle-form">
                <div className="form-floating mb-3">
                    <input value={this.state.name} onChange={this.handleNameChange} placeholder="Name" required type="text" name="name" id="name" className="form-control"/>
                    <label htmlFor="name">Name</label>
                </div>
                <div className="form-floating mb-3">
                    <input value={this.state.picture_url} onChange={this.handlePictureChange} placeholder="Picture URL" required type="text" name="picture_url" id="picture_url" className="form-control"/>
                    <label htmlFor="picture_url">Picture URL</label>
                </div>
                <div className="mb-3">
                <select value={this.state.manufacturer} onChange={this.handleManufacturerChange} required name="manufacturer" id="manufacturer" className="form-select">
                  <option value="">Choose a Manufacturer</option>
                  {this.state.manufacturers.map(manufacturer => {
                    return (
                      <option key={manufacturer.id} value={manufacturer.id}>
                        {manufacturer.name}
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
export default VehicleModelForm;