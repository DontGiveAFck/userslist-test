import React from 'react';
import { Table, Icon, Button } from "semantic-ui-react";
const cn = 'MainTable-MainTableRow';

export default class MainTableRow extends React.Component {

    render () {
        const {
            name,
            age,
            position,
            email,
        } = this.props.rowData;
        const {index} = this.props;

        return (
            <Table.Row>
                <Table.Cell>{name}</Table.Cell>
                <Table.Cell>{age}</Table.Cell>
                <Table.Cell>{position}</Table.Cell>
                <Table.Cell>{email}</Table.Cell>
                <Table.Cell>{this.getActionButtons(index)}</Table.Cell>
            </Table.Row>
        );
    }

    getActionButtons = (index) => {
        return (
            <div>
                <Button
                    icon={<Icon
                        name='trash alternate'
                    />}
                    color='white'
                    key={index}
                    onClick={
                        (event) => this.removeRow(event, index)
                    }
                />
                <Button
                    icon={<Icon
                        name='pencil alternate'
                    />}
                    color='white'
                />
            </div>
        )
    }

    removeRow = (event, index) => {
        const {removeUserRow} = this.props;
        removeUserRow(index);
    }
}
