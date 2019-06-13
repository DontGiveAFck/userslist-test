import React from 'react';
import './App.css';
import MainTable from '../MainTable/MainTable';

const cn = 'Page';

class App extends React.Component{

    render () {
        return (
            <div className={cn}>
                <MainTable/>
            </div>
        );
    }
}

export default App;
