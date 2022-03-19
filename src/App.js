import React, { useEffect, useState } from "react";
import axios from "axios";
function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get("https://whispering-shore-13501.herokuapp.com/book")
        .then((res) => setData(res.data));
    };
    fetchData();
  }, []);
  return (
    <div>
      App
      {data.map((item) => (
        <div>
          <h1>{item.bookname}</h1>
        </div>
      ))}
    </div>
  );
}

export default App;
