import React from 'react';
import { Message } from 'semantic-ui-react'
import {connect} from "react-redux";

class Error extends React.Component{
    render () {
        const {errors} = this.props;
        return errors.length ? (
            <Message negative>
                <Message.Header>Ошибка!</Message.Header>
                {errors.map((error, i) =>
                    <p key={i}>
                        {error}
                    </p>
                )}
            </Message>
        ) : '';
    }
}

const mapStateToProps = (state) => {
    return {
        errors: state.errors
    }
};

export default connect(mapStateToProps)(Error);
