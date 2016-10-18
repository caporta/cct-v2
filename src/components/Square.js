import React, { Component, PropTypes } from 'react';

import { updateCoordinate, incrementScore } from '../actions/index';
import { getRandomCoordinate } from '../utilities/index';


class Square extends Component {
    componentDidMount() {
        const { store } = this.context;
        this.unsubscribe = store.subscribe(() =>
            this.forceUpdate()
        );
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    getMatch() {
        const props = this.props;
        const { store } = this.context;
        const state = store.getState();
        return props.id == state.coordinate;
    }

    render() {
        const props = this.props;
        const { store } = this.context;
        const state = store.getState();
        let coordinate = getRandomCoordinate(props.coordinates)
        return(
            <div
                className={'square'}
                id={props.id}
                onClick={(e) => {
                    this.getMatch()
                    if (this.getMatch() && state.game.active) {
                        store.dispatch(updateCoordinate(coordinate))
                        store.dispatch(incrementScore());
                    }
                }}
            >
            </div>
        );
    }
}
Square.contextTypes = {
    store: PropTypes.object
};

export default Square;
