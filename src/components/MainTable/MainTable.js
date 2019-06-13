import React from 'react';
import {Table} from "semantic-ui-react";
import {TableRow, Menu, Icon, Button} from "semantic-ui-react";
import {
    TABLE_AGE,
    TABLE_EMAIL,
    TABLE_NAME,
    TABLE_POSITION,
    BUTTON_ADD_ROW,
    BUTTON_SAVE_TABLE, TABLE_ACTIONS
} from "../../constants/constants";
import MainTableRow from '../MainTableRow/MainTableRow';
import {addUserRow, removeUserRow, editUserRow, changeUserRow, saveUserRow} from '../../actions/users'
import {connect} from "react-redux";

const cn = 'MainTable';

class MainTable extends React.Component {

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
                    <Table.HeaderCell>{TABLE_ACTIONS}</Table.HeaderCell>
                </Table.Row>
            </Table.Header>
        );
    };

    getTableBody = () => {
        const {
            users,
            removeUserRow,
            editUserRow,
            changeUserRow,
            saveUserRow
        } = this.props;

        return users ? (
            <Table.Body>
                {users.map((user, index) =>
                    <MainTableRow
                        rowData={user}
                        index={index}
                        removeUserRow={removeUserRow}
                        editUserRow={editUserRow}
                        changeUserRow={changeUserRow}
                        saveUserRow={saveUserRow}
                    />
                )}
            </Table.Body>
        ) : ''
    };

    getTableFooter = () => {
        const {addUser, saveTable} = this.props;

        return (
            <Table.Footer>
                <Table.Row>
                    <Table.HeaderCell colSpan='5'>
                        <Button
                            color='blue'
                            onClick={addUser}
                        >
                            {BUTTON_ADD_ROW}
                        </Button>
                        <Button
                            color='blue'
                            onClick={saveTable}
                        >
                            {BUTTON_SAVE_TABLE}
                        </Button>
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

const mapStateToProps = (state) => {
    const { users = [] } = state;
    return {
        users
    }
};

const mapDispatchToProps = dispatch => {
    return {
        addUser: () =>
            dispatch(addUserRow()),
        removeUserRow: (index) =>
            dispatch(removeUserRow(index)),
        editUserRow: (index) =>
            dispatch(editUserRow(index)),
        changeUserRow: (value, index, field) =>
            dispatch(changeUserRow(value, index, field)),
        saveUserRow: (index) =>
            dispatch(saveUserRow(index))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(MainTable);
