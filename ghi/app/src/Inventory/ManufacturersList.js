function App(props) {
    if (props.manufacturers === undefined) {
      return "gabagool";
    }
    return (
      <div className="container">
          <table className="table table-striped">
              <thead>
                  <tr>
                      <th>Name</th>
                  </tr>
              </thead>
              <tbody>
                  {props.manufacturers.map(manufacturer => {
                      return (
                          <tr key={manufacturer.href}>
                              <td>{ manufacturer.name }</td>
                          </tr>
                      );
                  })}
              </tbody>
          </table>
      </div>
    );
  }

  export default App;