import React, {Component} from 'react';

class AddAlly extends Component {
	constructor(props) {
		super(props)
		this.state= {
			newAlly: ''
		}
		this.updateNewAlly = this.updateNewAlly.bind(this)
		this.handleAddNew = this.handleAddNew.bind(this)
	}
	updateNewAlly(e) {
		this.setState({
			newAlly: e.target.value
		})
	}
	handleAddNew() {
		this.props.addNew(this.state.newAlly)
		this.setState({
			newAlly: ''
		})
	}
	render() {
		return (
			<div>
				<input type="text" value={this.state.newAlly} onChange={this.updateNewAlly}/>
				<button onClick={this.handleAddNew}> Forge Alliance </button>
			</div>
		)
	}
}
export default AddAlly;