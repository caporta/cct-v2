import React, { Component, PropTypes } from 'react';

import { toggleGame, resetScore, updateCoordinate, resetCoordinate } from '../actions/index';
import { getRandomCoordinate } from '../utilities/index';


class StartButton extends Component {
    activateGame() {
        const { dispatch, coordinates } = this.props;
        let coordinate = getRandomCoordinate(coordinates());
        dispatch(resetScore())
        dispatch(toggleGame());
        dispatch(updateCoordinate(coordinate));
    }

    deactivateGame(timeout) {
        const { dispatch } = this.props;
        setTimeout(() => {
            dispatch(toggleGame())
            dispatch(resetCoordinate())
        }, timeout)
    }

    render() {
        const { active } = this.props;
        let disabled = active ? 'disabled' : ''
        return (
            <div>
                <button
                    disabled={disabled}
                    className={'button button__start'}
                    onClick={(e) => {
                        this.activateGame()
                        this.deactivateGame(30000)
                    }}
                >
                    Start
                </button>
            </div>
        );
    }
}

export default StartButton;
