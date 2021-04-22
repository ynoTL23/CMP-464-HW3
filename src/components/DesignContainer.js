//import { render } from '@testing-library/react';
import React from 'react';
import PadInput from './PadInput';

class DesignContainer extends React.Component {

    render() {

        return (
            <div className="header">
                <h1>DISIGNPAD <button>EDIT</button> {this.props.name}</h1>
            <main className="main-container">
                <PadInput />
            </main>
            </div>
        );
    }
}
export default DesignContainer;