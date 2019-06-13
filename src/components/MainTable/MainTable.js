import React from 'react';
import {Table} from "semantic-ui-react";
import {TableRow, Menu, Icon, Button} from "semantic-ui-react";
import {TABLE_AGE, TABLE_EMAIL, TABLE_NAME, TABLE_POSITION} from "../../constants/constants";
import MainTableRow from '../MainTableRow/MainTableRow';
import LocalStorage from "../../utils/LocalStorage";
import {addUser} from '../../actions/users'
import {connect} from "react-redux";

const cn = 'MainTable';

class MainTable extends React.Component {

    constructor(props) {
        super(props);
    }
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
        const {addUser} = this.props;

        return (
            <Table.Footer>
                <Button
                    onClick={addUser}
                >Добавить</Button>
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

const mapStateToProps = (state) => {
    const { users = [] } = state;
    return {
        users
    }
};

const mapDispatchToProps = dispatch => {
    return {
        addUser: (name, age, position, email) =>
            dispatch(addUser(name, age, position, email))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(MainTable);
