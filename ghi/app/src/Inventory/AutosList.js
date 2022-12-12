function App(props) {
    if (props.autos === undefined) {
      return "i kill hate u";
    }
    return (
      <div className="container">
          <table className="table table-striped">
              <thead>
                  <tr>
                      <th>VIN</th>
                  </tr>
              </thead>
              <tbody>
                  {props.autos.map(auto => {
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

  export default App;
