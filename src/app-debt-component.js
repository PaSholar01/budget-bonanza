import React, {Component} from 'react';
import {Panel} from 'primereact/components/panel/Panel';
import { Chart } from 'primereact/components/chart/Chart';
import {TreeTable} from 'primereact/components/treetable/TreeTable';
import {Button} from 'primereact/components/button/Button';
import {OverlayPanel} from 'primereact/components/overlaypanel/OverlayPanel';
import { Column } from "primereact/components/column/Column";
import {Tooltip} from 'primereact/components/tooltip/Tooltip';


class AppDebtComp extends Component {
    constructor(props) {
        super(props)
        this.state={
            showSchedule: false,
            listOfDebts: [{label: 'Car Payments',value: 500},{label: 'Home Payments',value: 1163}]
        }
        this.handleDisplaySchedule = this.handleDisplaySchedule.bind(this);
    }
    handleDisplaySchedule(e) {
        this.showSchedule.toggle(e);
    }
    render() {
        var dataChart = {
            labels: [this.state.listOfDebts[0].label, this.state.listOfDebts[1].label],
            datasets: [
                {
                    data: [this.state.listOfDebts[0].value, this.state.listOfDebts[1].value],
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
                    "name": "Car Payments",
                    "amount": "$500"
                },
                "children": [
                    {
                        "data": {
                            "name": "Paul's Car",
                            "amount": "$250"
                        }
                    },
                    {
                        "data": {
                            "name": "Bree's Car",
                            "amount": "$250"
                        }
                    }
                ]
            },
            {
                "data": {
                    "name": "Home Payments",
                    "amount": "$1163"
                }
            }
        ];
        return (
            <Panel header="Monthly Debts">
                <div className="ui-g">
                    <div className="ui-g-6">
                        Debts in this component.
                        <TreeTable value={dataTree} header="Monthly Debts">
                            <Column field="name" header="Name"></Column>
                            <Column field="amount" header="Amount"></Column>
                        </TreeTable>
                        <div className="ui-g-6">
                            <b>Total Debt: ${this.state.listOfDebts[0].value + this.state.listOfDebts[1].value}</b>
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
                            <Tooltip for="#add-button-d" title="Add New Debt" tooltipPosition="top" />
                            <Button id="add-button-d" type="button" className="ui-button-success" icon="fa fa-plus" onClick={''} />
                        </div>
                        <div className="ui-g-3">
                            <Tooltip for="#delete-button-d" title="Delete a Debt" tooltipPosition="top" />
                            <Button id="delete-button-d" type="button" className="ui-button-danger" icon="fa fa-trash" onClick={''} />
                        </div>
                        <div className="ui-g-3">
                            <Tooltip for="#edit-button-d" title="Edit Current Debt" tooltipPosition="top" />
                            <Button id="edit-button-d" type="button" className="ui-button-info"icon="fa fa-pencil" onClick={''} />
                        </div>
                        <div className="ui-g-3">
                            <Tooltip for="#show-schedule-d" title="Show Payment Schedule" tooltipPosition="top" />
                            <Button id="show-schedule-d" type="button" icon="fa fa-calendar" onClick={this.handleDisplaySchedule} />
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
export default AppDebtComp;