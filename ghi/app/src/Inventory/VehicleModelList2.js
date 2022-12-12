import React from 'react';

class VehicleModelList2 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        models:[]
    }
}
    async componentDidMount() {
        const url = 'http://localhost:8100/api/models/';

        const response = await fetch(url);

        if (response.ok) {
          const data = await response.json();
          this.setState({models: data.models});
        }
    }

    render() {
        return (
                <div className="mb-3">
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>Name</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.models.map(model => {
                                return (
                                    <tr key={model.href}>
                                        <td>{ model.name }</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
        );
    }
}
export default VehicleModelList2;