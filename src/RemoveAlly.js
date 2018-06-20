import React, {Component} from 'react';
import {ListBox} from 'primereact/components/ListBox/ListBox';

class RemoveAlly extends Component {
	constructor(props) {
		super(props)
		this.state = {
			friends: props.allyNames,
			toRemove: ''
		}
		this.handleRemoveFriend = this.handleRemoveFriend.bind(this)
		this.updateRemoveFriend = this.updateRemoveFriend.bind(this)
		this.allyTemplate = this.allyTemplate.bind(this)
	}
	updateRemoveFriend(e) {
		this.setState({
			toRemove: e.target.value
		})
	}
	handleRemoveFriend() {
		this.props.removeOld(this.state.toRemove)
		this.setState({
			toRemove: ''
		})
	}
	allyTemplate(ally) {
		return (
			<div>
				{ally}
			</div>
		)
	}
	render() {
		return (
			<div>
				<OrderList value={this.props.allyNames} itemTemplate={this.allyTemplate} responsive={true} header="Be it necessary, declare an enemy..."
					listStyle={{height: '20em'}} onChange={(e) => this.updateRemoveFriend(e)}></OrderList>
				<button onClick={this.handleRemoveFriend}> Declare War </button>
			</div>
		)
	}
}
export default RemoveAlly;