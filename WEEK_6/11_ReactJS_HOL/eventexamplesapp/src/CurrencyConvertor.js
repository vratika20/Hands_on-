import React, { Component } from "react";

class CurrencyConvertor extends Component {
  constructor(props) {
    super(props);

    this.state = {
      amount: "",
      currency: ""
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();

    const euro = this.state.amount / 90;

    alert(
      "Converting to Euro Amount is " + euro.toFixed(2)
    );
  };

  render() {
    return (
      <div className="card">
        <h2 className="converter-title">
          Currency Convertor
        </h2>

        <p className="card-description">
          Convert Indian Rupees to Euro.
        </p>

        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Amount</label>

            <input
              type="number"
              placeholder="Enter amount in INR"
              value={this.state.amount}
              onChange={(event) =>
                this.setState({
                  amount: event.target.value
                })
              }
            />
          </div>

          <div className="form-group">
            <label>Currency</label>

            <input
              type="text"
              placeholder="Enter Euro"
              value={this.state.currency}
              onChange={(event) =>
                this.setState({
                  currency: event.target.value
                })
              }
            />
          </div>

          <button
            className="submit-button"
            type="submit"
          >
            Convert Currency
          </button>
        </form>
      </div>
    );
  }
}

export default CurrencyConvertor;