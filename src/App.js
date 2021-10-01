import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("https://prodev-api.ilcs.co.id/ibis_api_external_dev_v2/index.php/SingleBilling/getSppBDoc").then((response) => {
      setData(response.data);
      console.log(response.data);
    });
  }, []);

  return data.forEach((items) => (
    <table>
      <th>{items[0]}</th>
      <th>{items[1]}</th>
    </table>
  ));
}

export default App;
