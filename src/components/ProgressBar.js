import React, { Component, PropTypes } from 'react';


class ProgressBar extends Component {
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
            <div
                className={state.game.active ? 'bar bar__progress bar__progress--active' : 'bar bar__progress'}>
            </div>
        );
    }
}
ProgressBar.contextTypes = {
    store: PropTypes.object
}

export default ProgressBar;
