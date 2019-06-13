import React from 'react';
import { Header as SemanticHeader } from 'semantic-ui-react';
import { HEADER } from "../../constants/constants";

const cn = 'Header';

export default class Header extends React.Component{
    render () {
        return (
            <div className={cn}>
                <SemanticHeader as='h1'>{ HEADER }</SemanticHeader>
            </div>
        );
    }
}
