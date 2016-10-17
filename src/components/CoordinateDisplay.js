import React, { Component, PropTypes } from 'react';

class CoordinateDisplay extends Component {
    render() {
        return (
            <div>coord.</div>
        );
    }
}
CoordinateDisplay.contextTypes = {
    store: PropTypes.object
}

export default CoordinateDisplay;
