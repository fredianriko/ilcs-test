import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);
  const [url, setUrl] = useState("https://prodev-api.ilcs.co.id/ibis_api_external_dev_v2/index.php/SingleBilling/getSppBDoc");

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(url);
      setData(result.data.data);
      // console.log(result.data.data);
    };
    fetchData();
  }, [url]);

  const dataRekap = data.map((items) => {
    // const loop = () => {
    //   for (let i = 0; i <= items.length; i++) {
    //     return i;
    //     console.log(i);
    //   }
    // };
    return (
      <tr className="container">
        <td className="data">{data.indexOf(items)}</td>
        <td className="data">{items.ID_DOKUMEN}</td>
        <td className="data">{items.NAMA_DOKUMEN}</td>
      </tr>
    );
  });
  // const dataDokumen = data.map((items) => console.log(items));

  return (
    <table>
      <thead>
        <tr>
          <td className="header">NO</td>
          <td className="header">ID DOKUMEN</td>
          <td className="header">NAMA DOKUMEN</td>
        </tr>
      </thead>
      <tbody>{dataRekap}</tbody>
    </table>
  );
}

export default App;
