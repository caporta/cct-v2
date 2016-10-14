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
        const { store } = this.context;
        const state = store.getState();
        let finalScore = !state.game.active ? state.score : ''
        return (
            <div>{finalScore}</div>
        );
    }
}
ScoreDisplay.contextTypes = {
    store: PropTypes.object
};

export default ScoreDisplay;
