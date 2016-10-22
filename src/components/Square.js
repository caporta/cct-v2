import React, { Component, PropTypes } from 'react';

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

    componentDidMount() {
        const { store } = this.context;
        this.unsubscribe = store.subscribe(() =>
            this.forceUpdate()
        );
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    resetLocalState(timeout) {
        setTimeout(() =>
            this.setState(this.initialLocalState)
        , timeout)
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
        const localState = this.state;
        const state = store.getState();
        let coordinate = getRandomCoordinate(props.coordinates);
        return(
            <div
                className={this.state.className}
                id={props.id}
                onClick={(e) => {
                    if (state.game.active) {
                        if (this.getMatch()) {
                            store.dispatch(updateCoordinate(coordinate))
                            store.dispatch(incrementScore());
                            this.setState({ className: localState.className + ' correct'});
                        } else {
                            this.setState({ className: localState.className + ' incorrect'});
                        }
                    }
                    resetLocalState(800);
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
