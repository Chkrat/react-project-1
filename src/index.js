import React from "react";
import ReactDom from "react-dom";
import "./index.css";

const books = [
  {
    id: 4,
    img: "https://m.media-amazon.com/images/I/61ctngWorgL._AC_UL320_.jpg",
    title: "Reminders of Him",
    author: "Colleen Hoover",
    price: "30$"
  },

  {
    id: 5,
    img: "https://m.media-amazon.com/images/I/61kKxo1I4lL._AC_UL320_.jpg",
    title: "I Loved Her Enough",
    author: "Diane H. Lane ",
    price: "29$"
  },

  {
    id: 6,
    img: "https://m.media-amazon.com/images/I/91Sy3S-198L._AC_UL320_.jpg",
    title: "The Lost Bookshop",
    author: "Evie Woods",
    price: "31$"
  },
];

function BookList() {
  return (
    <section className="bookList">
      {books.map((book) => {
        return <Book key={book.id} {...book}></Book>;
      })}
    </section>
  );
}

const Book = ({ img, title, author, price }) => {
  function clickShow(e) {
    console.log(e);
    console.log(e.target);
    alert("Button Works");
  }



  const ConsoleShow = (author) => {
    console.log(author);
    console.log(price);
  };
  return (
    <article
      className="book"
    >
      <img src={img} alt="" />
      <h1 onClick={() => console.log(title)}>{title}</h1>
      <h4>{author}</h4>
      <button type="button" onClick={clickShow}>
        click it 
      </button>
      <br></br>
      <button type="button" onClick={() => ConsoleShow(author)}>
        look on console
      </button>
      <br></br>
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById("root"));


 
