import React from 'react';

class SalesList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        sale:[]
    }
}
    async componentDidMount() {
        const url = 'http://localhost:8090/api/sales_rest/sales';

        const response = await fetch(url);

        if (response.ok) {
          const data = await response.json();
          this.setState({sale: data.sale});
        }
    }

    render() {
        return (
                <div className="mb-3">
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>Price</th>
                                <th>Customer</th>
                                <th>Sales Person</th>
                                <th>Auto VIN</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.sale.map(i => {
                                return (
                                    <tr key={i.id}>
                                        <td>{ i.price }</td>
                                        <td>{ i.customer }</td>
                                        <td>{ i.sales_person }</td>
                                        <td>{ i.auto }</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
        );
    }
}
export default SalesList;