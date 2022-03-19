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

  const [book, setBook] = useState({
    username: "",
    bookname: "",
  });

  const onChnage = ({ target }) => {
    setBook({ ...book, [target.name]: target.value });
  };
  const onSubmitHandel = (e) => {
    e.preventDefault();
    const fetchDataPost = async () => {
      await axios
        .post("https://whispering-shore-13501.herokuapp.com/book", book)
        .then((res) => console.log(res.data));
    };
    fetchDataPost();
  };
  return (
    <div>
      App
      <form onSubmit={onSubmitHandel}>
        <input
          placeholder="username"
          value={book.username}
          name="username"
          onChange={onChnage}
        />
        <input
          placeholder="username"
          value={book.bookname}
          name="bookname"
          onChange={onChnage}
        />
        <button>Add</button>
      </form>
      {data.map((item) => (
        <div>
          <h1>{item.bookname}</h1>
        </div>
      ))}
    </div>
  );
}

export default App;
