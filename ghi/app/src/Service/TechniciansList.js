import React from 'react';

class TechniciansList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        technicians:[]
    }
}
    async componentDidMount() {
        const url = 'http://localhost:8080/api/technicians/';

        const response = await fetch(url);

        if (response.ok) {
          const data = await response.json();
          this.setState({technicians: data.technicians});
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
                            {this.state.technicians.map(technician => {
                                return (
                                    <tr key={technician.id}>
                                        <td>{ technician.name }</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
        );
    }
}
export default TechniciansList;
