import React from "react";

function BookDetails(props) {
  const bookdet = (
    <div>
      {props.books.map((book) => (
        <div className="detail-item" key={book.id}>
          <h3>{book.bname}</h3>
          <p className="price">₹{book.price}</p>
        </div>
      ))}
    </div>
  );

  return (
    <section className="details-section book-section">
      <p className="section-number">01</p>
      <h2>Book Details</h2>
      <div className="title-line"></div>

      {props.books.length > 0 ? (
        bookdet
      ) : (
        <p>No books available</p>
      )}
    </section>
  );
}

export default BookDetails;