import React from 'react';
import { Table, Icon, Button, Input } from "semantic-ui-react";
const cn = 'MainTable-MainTableRow';

export default class MainTableRow extends React.Component {

    render () {
        const {
            name,
            age,
            position,
            email,
            active
        } = this.props.rowData;
        const {index} = this.props;

        return active ?
            <Table.Row active={active}>
                <Table.Cell>
                    <Input
                        value={name}
                        onChange={
                            (e, data) => this.changeRow(data, index, 'name')
                        }
                    />
                </Table.Cell>
                <Table.Cell>
                    <Input
                        value={age}
                        onChange={
                            (e, data) => this.changeRow(data, index, 'age')
                        }
                    />
                </Table.Cell>
                <Table.Cell>
                    <Input
                        value={position}
                        onChange={
                            (e, data) => this.changeRow(data, index, 'position')
                        }
                    />
                </Table.Cell>
                <Table.Cell>
                    <Input
                        value={email}
                        onChange={
                            (e, data) => this.changeRow(data, index, 'email')
                        }
                    />
                </Table.Cell>
                <Table.Cell>{this.getActionButtons(index)}</Table.Cell>
            </Table.Row> :
                <Table.Row>
                <Table.Cell>{name}</Table.Cell>
                <Table.Cell>{age}</Table.Cell>
                <Table.Cell>{position}</Table.Cell>
                <Table.Cell>{email}</Table.Cell>
                <Table.Cell>{this.getActionButtons(index)}</Table.Cell>
            </Table.Row>
        ;
    }

    getActionButtons = (index) => {
        const { active } = this.props.rowData;
        return (
            <div>
                <Button
                    icon={<Icon
                        name='trash alternate'
                    />}
                    color='red'
                    key={index}
                    onClick={
                        (event) => this.removeRow(event, index)
                    }
                />
                {!active ? (<Button
                        icon={<Icon
                            name='pencil alternate'
                        />}
                        color='green'
                        key={index}
                        onClick={
                            (event) => this.editRow(event, index)
                        }
                    />) :
                    (<Button
                        icon={<Icon
                            name='save'
                        />}
                        color='green'
                        key={255 - index}
                        onClick={
                            (event) => this.saveRow(event, index)
                        }
                    />)
                }
            </div>
        )
    };

    removeRow = (event, index) => {
        const {removeUserRow} = this.props;
        removeUserRow(index);
    };

    editRow = (event, index) => {
        const {editUserRow} = this.props;
        editUserRow(index);
    };

    saveRow = (event, index) => {
        const {saveUserRow} = this.props;
        saveUserRow(index);
    };

    changeRow = (data, index, field) => {
        const {changeUserRow} = this.props;
        const {value} = data;
        changeUserRow(value, index, field);
    }
}
