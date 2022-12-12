import React from 'react';

class CustomerList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        customer:[]
    }
}
    async componentDidMount() {
        const url = 'http://localhost:8090/api/sales_rest/customer/';

        const response = await fetch(url);

        if (response.ok) {
          const data = await response.json();
          this.setState({customer: data.customer});
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
                            {this.state.customer.map(i => {
                                return (
                                    <tr key={i.id}>
                                        <td>{ i.name }</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
        );
    }
}
export default CustomerList;