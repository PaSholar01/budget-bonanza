import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import ShowAllies from './ShowAllies.js';
// import RemoveAlly from './RemoveAlly.js';
// import AddAlly from './AddAlly.js';
import AppExpComp from './app-living-expense-component.js';
import AppDebtComp from './app-debt-component.js';
import AppStatusComp from './app-budget-status-component.js';
import AppLogin from './app-login-component.js';
import 'primereact/resources/themes/omega/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoggedIn: false,
      users: [
        {
          username: 'SholarFam',
          password: 'sholar540'
        }
      ]
    }
    this.handleLogin = this.handleLogin.bind(this)
    this.handleLogout = this.handleLogout.bind(this)
  }
  handleLogin(user) {
    this.state.users.forEach((item) => {
      if( user.password === item.password && user.username === item.username) {
        this.setState({
            isLoggedIn: true
        })
      }
    }); 
  }
  handleLogout() {
    this.setState({
      isLoggedIn: false
    })
  }
  render() {
    return ( this.state.isLoggedIn ? 
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Budget Tracker</h1>
          <button onClick={this.handleLogout}>Logout</button>
        </header>
        <p className="App-intro">
        <h1>Requirements</h1>
          To begin with, the app needs to keep track of our budget. The app needs to have access to our total income (after tax)
          as well as our total expenditures. 
        </p>
        <p>
          The app will be broken down into one parent component...with three child components.
          The Children are: 
          <ul>
            <li>Debts - this will deal with / show current debts to be paid monthly</li>
            <li>Living Expenses - this will deal with / show living expenses</li>
            <li>Budget Progress - this will break down how we are doing with the budget and show the current status for the month</li>
          </ul>
        </p>
        <p>
          The app will include login/logout functionality to keep unwanted guests out...
          Only the Sholar family can use this application.
        </p>
        <p>
          The app will persist data using AWS and will be deployed using AWS/Docker... this will be a 100% cloud based application.
        </p>
        <p>
          Basic CRUD functionality will be available to each component.
        </p>
        <p>
          The app will utilize the PrimeReact UI library.
        </p>
         <div className="ui-g">
           <div className="ui-g-6 ui-g-nopad">
              <div className="ui-g-12">
                <AppDebtComp></AppDebtComp>
              </div>
              <div className="ui-g-12">
                <AppExpComp></AppExpComp>
              </div>
           </div>
           <div className="ui-g-6 ui-g-nopad">
              <div className="ui-g-12">
                <AppStatusComp></AppStatusComp>
              </div>
           </div>
        </div>
      </div>
    : <AppLogin checkUser={this.handleLogin}></AppLogin>
    );
  }
}

export default App;