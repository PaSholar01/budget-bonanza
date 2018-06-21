import React, {Component} from 'react';
import {Panel} from 'primereact/components/panel/Panel';

class AppStatusComp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            stuff: 'Stuff'
        }
    }
    render() {
        return (
            <Panel header="Budget Analysis">
                Summary Analysis goes here.
            </Panel>
        )
    }
}
export default AppStatusComp;