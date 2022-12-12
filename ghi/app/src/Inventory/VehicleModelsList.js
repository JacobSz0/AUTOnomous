function App(props) {
    if (props.models === undefined) {
      return "i hate u";
    }
    return (
      <div className="container">
          <table className="table table-striped">
              <thead>
                  <tr>
                      <th>name</th>
                  </tr>
              </thead>
              <tbody>
                  {props.models.map(model => {
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

  export default App;
