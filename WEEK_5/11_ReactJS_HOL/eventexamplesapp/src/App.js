import React, { Component } from "react";
import CurrencyConvertor from "./CurrencyConvertor";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0
    };
  }

  increment = () => {
    this.setState({
      counter: this.state.counter + 1
    });
  };

  decrement = () => {
    this.setState({
      counter: this.state.counter - 1
    });
  };

  sayHello = () => {
    alert("Hello Member");
  };

  incrementAndHello = () => {
    this.increment();
    this.sayHello();
  };

  sayWelcome = (message) => {
    alert(message);
  };

  handleClick = (event) => {
    alert("I was clicked");
  };

  render() {
    return (
      <div className="app-container">
        <div className="app-title">
          <h1>React Event Examples</h1>
          <p>Event handling and currency conversion</p>
        </div>

        <div className="content-container">
          <div className="card">
            <h2>Event Handling</h2>

            <p className="card-description">
              Try the different React event handlers below.
            </p>

            <div className="counter">
              {this.state.counter}
            </div>

            <div className="button-container">
              <button onClick={this.incrementAndHello}>
                Increment
              </button>

              <button
                className="decrement-button"
                onClick={this.decrement}
              >
                Decrement
              </button>

              <button
                className="welcome-button"
                onClick={() => this.sayWelcome("welcome")}
              >
                Say Welcome
              </button>

              <button
                className="click-button"
                onClick={this.handleClick}
              >
                Click on me
              </button>
            </div>
          </div>

          <CurrencyConvertor />
        </div>
      </div>
    );
  }
}

export default App;