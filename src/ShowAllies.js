import React, {Component} from 'react';

class ShowAllies extends Component {
	render() {
		return (

			<div>
				<h3>Known Allies</h3>
				<ul>
					{this.props.allyNames.map((ally) => {
						return <li> {ally} </li>
					})}
				</ul>
			</div>

		)
	}
}
export default ShowAllies;