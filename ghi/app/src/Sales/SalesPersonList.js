import React from 'react';

class SalesPersonList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        sales_person:[]
    }
}
    async componentDidMount() {
        const url = 'http://localhost:8090/api/sales_rest/sales_person/';

        const response = await fetch(url);

        if (response.ok) {
          const data = await response.json();
          this.setState({sales_person: data.sales_person});
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
                            {this.state.sales_person.map(i => {
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
export default SalesPersonList;