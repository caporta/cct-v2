import React, { Component } from 'react';

import { updateCoordinate, incrementScore } from '../actions/index';
import { getRandomCoordinate } from '../utilities/index';


class Square extends Component {
    constructor(props) {
        super(props);
        this.state = {
            className: 'square'
        }
        this.initialLocalState = this.state;
    }

    resetLocalState(timeout) {
        setTimeout(() =>
            this.setState(this.initialLocalState)
        , timeout)
    }

    getMatch() {
        const { id, coordinate } = this.props;
        return id == coordinate;
    }

    render() {
        const { id, coordinates, active, dispatch } = this.props;
        const localState = this.state;
        let coordinate = getRandomCoordinate(coordinates);
        return(
            <div
                className={localState.className}
                id={id}
                onClick={(e) => {
                    if (active) {
                        if (this.getMatch()) {
                            dispatch(updateCoordinate(coordinate))
                            dispatch(incrementScore());
                            this.setState({ className: localState.className + ' correct'});
                        } else {
                            this.setState({ className: localState.className + ' incorrect'});
                        }
                    }
                    // timeout should match keyframe animation-duration in main.css
                    this.resetLocalState(800);
                }}
            >
            </div>
        );
    }
}

export default Square;
