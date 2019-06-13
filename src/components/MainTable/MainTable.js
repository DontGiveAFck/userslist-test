import React from 'react';
import {Table} from "semantic-ui-react";
import {Button, Input, Message, Menu, Icon} from "semantic-ui-react";
import {
    TABLE_AGE,
    TABLE_EMAIL,
    TABLE_NAME,
    TABLE_POSITION,
    BUTTON_ADD_ROW,
    BUTTON_SAVE_TABLE,
    TABLE_ACTIONS,
    SEARCHNAME_PLACEHOLDER
} from "../../constants/text";
import MainTableRow from '../MainTableRow/MainTableRow';
import {
    addUserRow,
    removeUserRow,
    editUserRow,
    changeUserRow,
    saveUserRow,
    saveTable,
    changeSearchName,
    onPageClick
} from '../../actions/users'
import { filterUserByName } from '../../utils/filter'
import {connect} from "react-redux";
import './MainTable.css';
import {USERS_PER_PAGE} from "../../constants/numberConstants";

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
                    <Table.HeaderCell >{TABLE_POSITION}</Table.HeaderCell>
                    <Table.HeaderCell >{TABLE_EMAIL}</Table.HeaderCell>
                    <Table.HeaderCell >{TABLE_AGE}</Table.HeaderCell>
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
            saveUserRow,
            currentPage,
            searchName
        } = this.props;

        const offset = USERS_PER_PAGE * (currentPage - 1);
        const usersForRender = [...users].splice(offset, USERS_PER_PAGE);
        const filteredUsers = searchName ?
            filterUserByName(usersForRender, searchName) :
            usersForRender;

        return  (
            <Table.Body>
                {
                    filteredUsers.length ? filteredUsers.map((user, index) => {
                        return (
                            <MainTableRow
                                rowData={user}
                                index={user.uniqueId}
                                removeUserRow={removeUserRow}
                                editUserRow={editUserRow}
                                changeUserRow={changeUserRow}
                                saveUserRow={saveUserRow}
                            />
                        )
                    }

                ) : <Table.Row>
                        <Table.Cell><div className='MainTable-Empty'>
                            <Message size='mini'>
                                ...
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
            changeSearchName,
            users
        } = this.props;
        const isAllUsersSaved = users.every(user => !user.active);

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
                                disabled={isSaved || !isAllUsersSaved}
                            >
                                {BUTTON_SAVE_TABLE}
                            </Button>
                            <div className={'MainTable-Search'}>
                                <Input
                                    onChange={
                                        (e, data) => changeSearchName(data.value)
                                    }
                                    value={searchName}
                                    placeholder={SEARCHNAME_PLACEHOLDER}
                                />
                            </div>

                        </div>
                        <div>
                            {this.getPagination()}
                        </div>
                    </Table.HeaderCell>
                </Table.Row>
            </Table.Footer>
        );
    };

    getPagination = () => {
        const {totalPages, currentPage, onPageClick} = this.props;
        const pages = new Array(totalPages).fill(0);

        return (
            <Menu floated='right' pagination>
                <Menu.Item
                    as='a'
                    icon
                    disabled={currentPage === 1}
                    onClick={() => onPageClick(currentPage - 1)}
                >
                    <Icon name='chevron left' />
                </Menu.Item>
                {pages.map((page, index) =>
                    <Menu.Item
                        as='a'
                        active={index + 1 === currentPage}
                        key={index}
                        onClick={() => onPageClick(index + 1)}
                    >
                        {index + 1}
                    </Menu.Item>)
                }
                <Menu.Item
                    as='a'
                    icon
                    disabled={currentPage === totalPages}
                    onClick={() => onPageClick(currentPage + 1)}
                >
                    <Icon name='chevron right' />
                </Menu.Item>
            </Menu>
        );
    }
}

const mapStateToProps = (state) => {
    const { users = [], isSaved = true, searchName = '', totalPages, currentPage} = state;
    return {
        users,
        isSaved,
        totalPages,
        currentPage,
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
            dispatch(changeSearchName(value)),
        onPageClick: (number) =>
            dispatch(onPageClick(number))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(MainTable);
