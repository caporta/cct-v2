import React, { Component, PropTypes } from 'react';


class ScoreDisplay extends Component {
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
        return (
            <div>#</div>
        );
    }
}
ScoreDisplay.contextTypes = {
    store: PropTypes.object
};

export default ScoreDisplay;
