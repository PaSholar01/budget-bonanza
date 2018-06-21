import React, {Component} from 'react';
import {Panel} from 'primereact/components/panel/Panel';

class AppLogin extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user: {
                username: '',
                password: ''
            }
        }
        this.handleUser = this.handleUser.bind(this)
        this.handUserName = this.handUserName.bind(this)
        this.handlePassword = this.handlePassword.bind(this)
    }
   handleUser() {
       this.props.checkUser(this.state.user)
   }
   handUserName(e) {
    this.setState({
        user: {
            username: e.target.value,
            password: this.state.user.password
        }
    })
   }
   handlePassword(e) {
    this.setState({
        user: {
            password: e.target.value,
            username: this.state.user.username
        }
    })
   }

   render() {
       return (
           <Panel header="Login">
               <div className="ui-g ui-fluid">
                   <div className="ui-g-3"></div>
                   <div className="ui-g-6">
                    Username: <input type="text" onChange={(e) => this.handUserName(e)} />
                   </div>
                   <div className="ui-g-3"></div>
               </div>
               <div className="ui-g ui-fluid">
                   <div className="ui-g-3"></div>
                   <div className="ui-g-6">
                    Password: <input type="text" onChange={(e) => this.handlePassword(e)} />
                   </div>
                   <div className="ui-g-3"></div>
               </div>
               <div className="ui-g ui-fluid">
                   <div className="ui-g-3"></div>
                   <div className="ui-g-6">
                    <button onClick={this.handleUser}>OK</button>
                   </div>
                   <div className="ui-g-3"></div>
               </div>
           </Panel>
       )
   }
}
export default AppLogin;