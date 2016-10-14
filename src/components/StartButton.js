import React, { Component, PropTypes } from 'react';

import { toggleGame, resetScore } from '../actions/index';


class StartButton extends Component {
    componentDidMount() {
        const { store } = this.context;
        this.unsubscribe = store.subscribe(() =>
            this.forceUpdate()
        );
    }
    componentWillUnmount() {
        this.unsubscribe();
    }

    activateGame(store) {
        store.dispatch(toggleGame());
    }

    deactivateGame(store, timeout) {
        setTimeout(() => {
            store.dispatch(toggleGame())
            store.dispatch(resetScore())
        }, timeout)
    }

    render() {
        const { store } = this.context;
        const state = store.getState();
        let disabled = state.game.active ? 'disabled' : ''
        return (
            <div>
                <button
                    disabled={disabled}
                    className={'button button__start'}
                    onClick={(e) => {
                        this.activateGame(store)
                        this.deactivateGame(store, 2000)
                    }}
                >
                    Start
                </button>
            </div>
        );
    }
}
StartButton.contextTypes = {
    store: PropTypes.object
};

export default StartButton;
