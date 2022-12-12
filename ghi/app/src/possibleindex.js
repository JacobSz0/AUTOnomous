
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

async function loadManufacturers() {
  const response = await fetch('http://localhost:8100/api/manufacturers/');
  if (response.ok) {
    const data = await response.json();
    root.render(
      <React.StrictMode>
        <App manufacturers={data.manufacturers} />
      </React.StrictMode>
    );
  } else {
    console.error(response);
  }

  const response2 = await fetch('http://localhost:8100/api/models/');
  if (response2.ok) {
    const data2 = await response2.json();
    root.render(
      <React.StrictMode>
        <App models={data2.models} />
      </React.StrictMode>
    );
  } else {
    console.error(response2);
  }


  const response3 = await fetch('http://localhost:8100/api/automobiles/');
  if (response3.ok) {
    const data3 = await response3.json();
    root.render(
      <React.StrictMode>
        <App autos={data3.autos} />
      </React.StrictMode>
    );
  } else {
    console.error(response3);
  }
}
loadManufacturers();
