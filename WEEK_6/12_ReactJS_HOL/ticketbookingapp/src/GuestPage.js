import React from "react";

function GuestPage() {
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

  return (
    <div>
      <div className="page-heading">
        <span className="page-tag">Guest Access</span>

        <h2>Available Flights</h2>

        <p>
          Explore available flights. Login to book your ticket.
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

            <div className="guest-message">
              Login required to book this flight
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GuestPage;