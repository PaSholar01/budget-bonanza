import React, {Component} from 'react';
import {Panel} from 'primereact/components/panel/Panel';
import {Chart} from 'primereact/components/chart/Chart';
import {Button} from 'primereact/components/button/Button';
import {OverlayPanel} from 'primereact/components/overlaypanel/OverlayPanel';
import { Column } from "primereact/components/column/Column";
import {TreeTable} from 'primereact/components/treetable/TreeTable';
import {Tooltip} from 'primereact/components/tooltip/Tooltip';

class AppExpComp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showSchedule: false,
            listOfExpense: [{label: 'Grocery', value: 450}, {label: 'Entertainment', value: 100}]
        }
        this.handleDisplaySchedule = this.handleDisplaySchedule.bind(this);
    }
    handleDisplaySchedule(e) {
        this.showSchedule.toggle(e);
    }
    render() {
        var dataChart = {
            labels: [this.state.listOfExpense[0].label, this.state.listOfExpense[1].label],
            datasets: [
                {
                    data: [this.state.listOfExpense[0].value, this.state.listOfExpense[1].value],
                    backgroundColor: [
                        "#36A2EB",
                        "#FFCE56"
                    ],
                    hoverBackgroundColor: [
                        "#36A2EB",
                        "#FFCE56"
                    ]
                }
            ]
        }
        var dataTree = [
            {
                "data": {
                    "name": "Grocery",
                    "amount": "$450"
                },
                "children": [
                    {
                        "data": {
                            "name": "Produce",
                            "amount": "$150"
                        }
                    },
                    {
                        "data": {
                            "name": "Poultry",
                            "amount": "$100"
                        }
                    },
                     {
                        "data": {
                            "name": "Other",
                            "amount": "$200"
                        }
                    }
                ]
            },
            {
                "data": {
                    "name": "Entertainment",
                    "amount": "$100"
                }
            }
        ];
        return (
            <Panel header="Monthly Expense">
                <div className="ui-g">
                    <div className="ui-g-6">
                        Monthly Expenses go here.
                        <TreeTable value={dataTree} header="Monthly Expense">
                            <Column field="name" header="Name"></Column>
                            <Column field="amount" header="Amount"></Column>
                        </TreeTable>
                        <div className="ui-g-6">
                            <b>Total Expense: ${this.state.listOfExpense[0].value + this.state.listOfExpense[1].value}</b>
                        </div>
                    </div>
                    <div className="ui-g-6">
                        <div className="content-section implementation">
                            <Chart type="doughnut" data={dataChart} />
                        </div>
                    </div>
                </div>
                <div className="ui-g">
                    <div className="ui-g-6"></div>
                    <div className="ui-g-6">
                        <div className="ui-g-3">
                            <Tooltip for="#add-button-e" title="Add New Expense" tooltipPosition="top" />
                            <Button id="add-button-e" type="button" className="ui-button-success" icon="fa fa-plus" onClick={''} />
                        </div>
                        <div className="ui-g-3">
                            <Tooltip for="#delete-button-e" title="Delete an Expense" tooltipPosition="top" />
                            <Button id="delete-button-e" type="button" className="ui-button-danger" icon="fa fa-trash" onClick={''} />
                        </div>
                        <div className="ui-g-3">
                            <Tooltip for="#edit-button-e" title="Edit Current Expense" tooltipPosition="top" />
                            <Button id="edit-button-e" type="button" className="ui-button-info"icon="fa fa-pencil" onClick={''} />
                        </div>
                        <div className="ui-g-3">
                            <Tooltip for="#show-schedule-e" title="Show Expense Schedule" tooltipPosition="top" />
                            <Button id="show-schedule-e" type="button" icon="fa fa-calendar" onClick={this.handleDisplaySchedule} />
                            <OverlayPanel ref={(el) => {this.showSchedule = el;}}>
                                Hello there
                            </OverlayPanel>
                        </div>
                    </div>
                </div>
            </Panel>
        )
    }
}
export default AppExpComp;