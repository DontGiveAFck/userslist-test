import React from 'react';
import {Table} from "semantic-ui-react";
import {TableRow, Menu, Icon} from "semantic-ui-react";
import {TABLE_AGE, TABLE_EMAIL, TABLE_NAME, TABLE_POSITION} from "../../constants/constants";
import MainTableRow from '../MainTableRow/MainTableRow';
import LocalStorage from "../../utils/LocalStorage";

const cn = 'MainTable';

export default class MainTable extends React.Component {

    render () {
        return (
            <div className={cn}>
                <Table celled>
                    {this.getTableHeader()}
                    {this.getTableBody()}
                    {this.getTableFooter()}
                </Table>
            </div>
        );
    }

    getTableHeader = () => {
        return (
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>{TABLE_NAME}</Table.HeaderCell>
                    <Table.HeaderCell>{TABLE_POSITION}</Table.HeaderCell>
                    <Table.HeaderCell>{TABLE_EMAIL}</Table.HeaderCell>
                    <Table.HeaderCell>{TABLE_AGE}</Table.HeaderCell>
                </Table.Row>
            </Table.Header>
        );
    };

    getTableBody = () => {
        const rows = LocalStorage.getValueFromLocalStorage('rows');

        return rows ? (
            <Table.Body>
                {rows.map(row => <MainTableRow rowData={row}/>)}
            </Table.Body>
        ) : ''
    };

    getTableFooter = () => {
        return (
            <Table.Footer>
                <Table.Row>
                    <Table.HeaderCell colSpan='4'>
                        <Menu floated='right' pagination>
                            <Menu.Item as='a' icon>
                                <Icon name='chevron left' />
                            </Menu.Item>
                            <Menu.Item as='a'>1</Menu.Item>
                            <Menu.Item as='a'>2</Menu.Item>
                            <Menu.Item as='a'>3</Menu.Item>
                            <Menu.Item as='a'>4</Menu.Item>
                            <Menu.Item as='a' icon>
                                <Icon name='chevron right' />
                            </Menu.Item>
                        </Menu>
                    </Table.HeaderCell>
                </Table.Row>
            </Table.Footer>
        );
    };

}
