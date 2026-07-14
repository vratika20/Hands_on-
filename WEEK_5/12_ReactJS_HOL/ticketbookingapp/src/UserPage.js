import React from "react";

function UserPage() {
  const flights = [
    {
      id: 1,
      from: "Chennai",
      to: "Mumbai",
      time: "08:30 AM",
      price: "₹5,499"
    },
    {
      id: 2,
      from: "Delhi",
      to: "Bangalore",
      time: "11:45 AM",
      price: "₹6,299"
    },
    {
      id: 3,
      from: "Pune",
      to: "Goa",
      time: "04:15 PM",
      price: "₹3,899"
    }
  ];

  const bookTicket = (flight) => {
    alert(
      "Ticket booked successfully from " +
        flight.from +
        " to " +
        flight.to
    );
  };

  return (
    <div>
      <div className="page-heading">
        <span className="page-tag user-tag">
          Member Access
        </span>

        <h2>Book Your Flight</h2>

        <p>
          Welcome back! Select a flight and book your ticket.
        </p>
      </div>

      <div className="flight-container">
        {flights.map((flight) => (
          <div className="flight-card" key={flight.id}>
            <div className="flight-route">
              <div>
                <span className="location-label">FROM</span>
                <h3>{flight.from}</h3>
              </div>

              <div className="plane-icon">✈</div>

              <div>
                <span className="location-label">TO</span>
                <h3>{flight.to}</h3>
              </div>
            </div>

            <div className="flight-details">
              <div>
                <span>Departure</span>
                <strong>{flight.time}</strong>
              </div>

              <div>
                <span>Ticket Price</span>
                <strong>{flight.price}</strong>
              </div>
            </div>

            <button
              className="book-button"
              onClick={() => bookTicket(flight)}
            >
              Book Ticket
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UserPage;