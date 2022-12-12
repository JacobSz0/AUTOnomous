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
                                <th>Name</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.sale.map(i => {
                                return (
                                    <tr key={i.id}>
                                        <td>{ i.price }</td>
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