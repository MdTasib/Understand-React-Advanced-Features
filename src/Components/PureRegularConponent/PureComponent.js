import React, { PureComponent } from 'react';

class PureCompo extends PureComponent {
    render() {
        return (
            <div>
                <h3>I am {this.props.name}</h3>
            </div>
        );
    }
}

export default PureCompo;