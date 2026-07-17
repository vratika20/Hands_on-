import React, { Component } from "react";
import GuestPage from "./GuestPage";
import UserPage from "./UserPage";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false
    };
  }

  handleLogin = () => {
    this.setState({
      isLoggedIn: true
    });
  };

  handleLogout = () => {
    this.setState({
      isLoggedIn: false
    });
  };

  render() {
    const isLoggedIn = this.state.isLoggedIn;

    let page;
    let button;

    if (isLoggedIn) {
      page = <UserPage />;

      button = (
        <button
          className="auth-button logout-button"
          onClick={this.handleLogout}
        >
          Logout
        </button>
      );
    } else {
      page = <GuestPage />;

      button = (
        <button
          className="auth-button login-button"
          onClick={this.handleLogin}
        >
          Login
        </button>
      );
    }

    return (
      <div className="app">
        <nav className="navbar">
          <div className="brand">
            <div className="brand-icon">✈</div>

            <div>
              <h1>SkyBook</h1>
              <span>Ticket Booking</span>
            </div>
          </div>

          <div className="nav-actions">
            <span className="user-status">
              {isLoggedIn ? "Welcome back, Member" : "Browsing as Guest"}
            </span>

            {button}
          </div>
        </nav>

        <main className="main-content">
          {page}
        </main>
      </div>
    );
  }
}

export default App;