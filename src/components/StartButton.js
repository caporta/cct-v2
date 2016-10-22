import React, { Component, PropTypes } from 'react';

import { toggleGame, resetScore, updateCoordinate, resetCoordinate } from '../actions/index';
import { getRandomCoordinate } from '../utilities/index';


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
        const props = this.props;
        let coordinate = getRandomCoordinate(props.coordinates());
        store.dispatch(resetScore())
        store.dispatch(toggleGame());
        store.dispatch(updateCoordinate(coordinate));
    }

    deactivateGame(store, timeout) {
        setTimeout(() => {
            store.dispatch(toggleGame())
            store.dispatch(resetCoordinate())
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
                        this.deactivateGame(store, 10000)
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
