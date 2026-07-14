import React from "react";

function App() {
  const heading = "Office Space";

  const offices = [
    {
      name: "DBS",
      rent: 50000,
      address: "Chennai",
      image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2"
    },
    {
      name: "Regus",
      rent: 75000,
      address: "Bangalore",
      image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72"
    },
    {
      name: "WeWork",
      rent: 60000,
      address: "Mumbai",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c"
    }
  ];

  return (
    <div style={{ margin: "50px" }}>
      <h1>{heading}, at Affordable Range</h1>

      {offices.map((office) => (
        <div key={office.name}>
          <img
            src={office.image}
            alt="Office Space"
            width="250"
            height="200"
          />

          <h1>Name: {office.name}</h1>

          <h3
            style={{
              color: office.rent < 60000 ? "red" : "green"
            }}
          >
            Rent: Rs. {office.rent}
          </h3>

          <h3>Address: {office.address}</h3>

          <hr />
        </div>
      ))}
    </div>
  );
}

export default App;