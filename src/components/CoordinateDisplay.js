import React, { Component, PropTypes } from 'react';

class CoordinateDisplay extends Component {
    componentDidMount() {
        const { store } = this.context;
        this.unsubscribe = store.subscribe(() =>
            this.forceUpdate()
        );
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    render() {
        const { store } = this.context;
        const state = store.getState();
        return (
            <div>{state.coordinate}</div>
        );
    }
}
CoordinateDisplay.contextTypes = {
    store: PropTypes.object
}

export default CoordinateDisplay;
