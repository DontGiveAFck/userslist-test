import React from 'react';
import { Label } from 'semantic-ui-react'
const cn = 'InlineError';

export default class InlineError extends React.Component{
    render () {
        const {msg} = this.props;
        return (
            <div className={cn}>
                <Label
                    color={'red'}
                >
                    {msg}
                </Label>
            </div>
        );
    }
}
