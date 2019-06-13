import React from 'react';
import {Table} from "semantic-ui-react";
import {TableRow, Menu, Icon, Button, Input, Message} from "semantic-ui-react";
import {
    TABLE_AGE,
    TABLE_EMAIL,
    TABLE_NAME,
    TABLE_POSITION,
    BUTTON_ADD_ROW,
    BUTTON_SAVE_TABLE,
    TABLE_ACTIONS,
    SEARCHNAME_PLACEHOLDER
} from "../../constants/constants";
import MainTableRow from '../MainTableRow/MainTableRow';
import {
    addUserRow,
    removeUserRow,
    editUserRow,
    changeUserRow,
    saveUserRow,
    saveTable,
    changeSearchName
} from '../../actions/users'
import { filterUserByName } from '../../utils/filter'
import {connect} from "react-redux";
import './MainTable.css';

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
                    <Table.HeaderCell className='MainTable-Name'>{TABLE_NAME}</Table.HeaderCell>
                    <Table.HeaderCell className='MainTable-Position'>{TABLE_POSITION}</Table.HeaderCell>
                    <Table.HeaderCell className='MainTable-Email'>{TABLE_EMAIL}</Table.HeaderCell>
                    <Table.HeaderCell className='MainTable-Age'>{TABLE_AGE}</Table.HeaderCell>
                    <Table.HeaderCell className='MainTable-Actions'>{TABLE_ACTIONS}</Table.HeaderCell>
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
            saveUserRow,
            searchName
        } = this.props;

        const filteredUsers = searchName ?
            filterUserByName(users, searchName) :
            users;

        return  (
            <Table.Body>
                { filteredUsers.length ? filteredUsers.map((user, index) =>
                    <MainTableRow
                        rowData={user}
                        index={index}
                        removeUserRow={removeUserRow}
                        editUserRow={editUserRow}
                        changeUserRow={changeUserRow}
                        saveUserRow={saveUserRow}
                    />
                ) : <Table.Row>
                        <Table.Cell><div className='MainTable-Empty'>
                            <Message>
                                <Message.Header>...</Message.Header>
                            </Message>
                        </div></Table.Cell>
                    </Table.Row>}
            </Table.Body>
        );
    };

    getTableFooter = () => {
        const {
            addUser,
            saveTable,
            isSaved,
            searchName,
            changeSearchName
        } = this.props;

        return (
            <Table.Footer>
                <Table.Row>
                    <Table.HeaderCell colSpan='5'>
                        <div className="MainTable-Actions">
                            <Button
                                color='blue'
                                onClick={addUser}
                            >
                                {BUTTON_ADD_ROW}
                            </Button>
                            <Button
                                color='blue'
                                onClick={saveTable}
                                disabled={isSaved}
                            >
                                {BUTTON_SAVE_TABLE}
                            </Button>
                            <Input
                                onChange={
                                    (e, data) => changeSearchName(data.value)
                                }
                                value={searchName}
                                placeholder={SEARCHNAME_PLACEHOLDER}
                            />
                        </div>
                    </Table.HeaderCell>
                </Table.Row>
            </Table.Footer>
        );
    };
}

const mapStateToProps = (state) => {
    const { users = [], isSaved = true, searchName = ''} = state;
    return {
        users,
        isSaved,
        searchName
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
            dispatch(saveUserRow(index)),
        saveTable: () =>
            dispatch(saveTable()),
        changeSearchName: (value) =>
            dispatch(changeSearchName(value))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(MainTable);
