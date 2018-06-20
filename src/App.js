import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import ShowAllies from './ShowAllies.js';
// import RemoveAlly from './RemoveAlly.js';
// import AddAlly from './AddAlly.js';
import 'primereact/resources/themes/omega/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      // username: 'pushar540',
      // house: 'Sholar',
      // allies: ['Cooke', 'Brun', 'Coheleach', 'Degrella']
    }
    // this.handleNameChange = this.handleNameChange.bind(this)
    // this.handleHouseChange = this.handleHouseChange.bind(this)
    // this.addAlly = this.handleAddAlly.bind(this)
    // this.removeAlly = this.handleRemoveAlly.bind(this)
  }
  // handleNameChange(e) {
  //   this.setState({
  //     username: e.target.value
  //   })
  // }
  // handleHouseChange(e) {
  //   this.setState({
  //     house: e.target.value
  //   })
  // }
  // handleAddAlly(ally) {
  //   this.setState((state) => ({
  //     allies: state.allies.concat([ally])
  //   }))
  // }
  // handleRemoveAlly(ally) {
  //   this.setState((state) => ({
  //     allies: state.allies.filter((name) => name !== ally)
  //   }))
  // }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Budget Tracker</h1>
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

      </div>
    );
  }
}

export default App;



 // <p className="App-input">
        //   <div>
        //     Change Your username:
        //     <input type="text" value={this.state.username} onChange={this.handleNameChange}/>
        //   </div>
        //   <div>
        //     Change Your house:
        //     <input type="text" value={this.state.house} onChange={this.handleHouseChange}/>
        //   </div>
        // </p>
        // <hr/>
        // <hr/>
        // <hr/>
        // <hr/>
        // <hr/>
        // <h4>Testing components below</h4>
        // <hr/>
        // <hr/>
        // <hr/>
        // <hr/>
        // <hr/>
        // <ShowAllies allyNames={this.state.allies} />
        // <AddAlly addNew={this.addAlly}/>
        // <RemoveAlly removeOld={this.removeAlly} allyNames={this.state.allies}/>