import React from 'react';
import { Table } from "semantic-ui-react";
const cn = 'MainTable-MainTableRow';

export default class MainTableRow extends React.Component {

    render () {
        const { name, age, position, email } = this.props.rowData;

        return (
            <Table.Row>
                <Table.Cell>{name}</Table.Cell>
                <Table.Cell>{age}</Table.Cell>
                <Table.Cell>{position}</Table.Cell>
                <Table.Cell>{email}</Table.Cell>
            </Table.Row>
        );
    }
}
