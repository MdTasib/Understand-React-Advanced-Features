import React, { Component } from 'react';
import PureCompo from './PureComponent';
import RegularComponent from './RegularComponent';

class PRComponet extends Component {

    state = {
        name: 'Mohammad Tasib'
    }


    componentDidMount() {
        setInterval(() => {
            this.setState({ name: 'Mohammad Tasib' })
        }, 1000)
    }

    render() {
        return (
            <div className='container'>
                <h3>Pure component and Regular component defferent</h3>
                <PureCompo name={this.state.name} />
                <PureCompo name={this.state.name} />
                <RegularComponent name={this.state.name} />
                <PureCompo name={this.state.name} />
                <PureCompo name={this.state.name} />

            </div>
        );
    }
}

export default PRComponet;