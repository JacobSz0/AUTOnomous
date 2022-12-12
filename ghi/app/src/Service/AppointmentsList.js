import React from 'react';

class Appointmentslist extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        appointments:[]
    }
}
    async componentDidMount() {
        const url = 'http://localhost:8080/api/appointments/';

        const response = await fetch(url);

        if (response.ok) {
          const data = await response.json();
          this.setState({appointments: data.appointments});
        }
    }

    render() {
        return (
                <div className="mb-3">
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>Vin</th>
                                <th>Customer Name</th>
                                <th>Date</th>
                                <th>Technician</th>
                                <th>Reason</th>
                                <th>VIP</th>

                            </tr>
                        </thead>
                        <tbody>
                            {this.state.appointments.map(appointment => {
                                return (
                                    <tr key={appointment.id}>
                                        <td>{ appointment.vin    }</td>
                                        <td>{ appointment.customer_name }</td>
                                        <td>{ appointment.date }</td>
                                        <td>{ appointment.technician_name }</td>
                                        <td>{ appointment.reason }</td>
                                        <td>{ appointment.in_inventory }</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
        );
    }
}
export default Appointmentslist;
