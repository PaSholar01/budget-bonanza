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
                Summary Analysis goes here.<br/>
                I want this to make lists of the items it does the math from...<br/>
                I want this to have a current budget status "glow" for the entire panel (red,orange,green,blue) for overBudget,nearingOverBudget,atBudget,underBudget.<br/>
                The status glow will be calculated based off the total debts/expenses and how much money has been spent/where so far during the month.<br/>
                The analysis will include idea's on how to decrease the overall budget debt?

            </Panel>
        )
    }
}
export default AppStatusComp;