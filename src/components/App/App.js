import React from 'react';
import './App.css';
import MainTable from '../MainTable/MainTable';
import { Provider } from "react-redux";
import { store } from '../../reducers/rootReducer';
import Header from '../Header/Header';
import InlineError from "../Error/Error";

const cn = 'App';

class App extends React.Component{

    render () {
        return (
            <Provider store={ store }>
                <div className={ cn }>
                    <Header/>
                    <MainTable/>
                    <InlineError/>
                </div>
            </Provider>
        );
    }
}

export default App;
