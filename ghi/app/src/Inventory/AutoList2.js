import React from 'react';

class AutoList2 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        autos:[]
    }
}
    async componentDidMount() {
        const url = 'http://localhost:8100/api/automobiles/';

        const response = await fetch(url);

        if (response.ok) {
          const data = await response.json();
          this.setState({autos: data.autos});
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
                            {this.state.autos.map(auto => {
                                return (
                                    <tr key={auto.href}>
                                        <td>{ auto.vin }</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
        );
    }
}
export default AutoList2;