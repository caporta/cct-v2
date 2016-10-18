import React, { Component, PropTypes } from 'react';

import Square from './Square';


class Board extends Component {
    componentDidMount() {
        const { store } = this.context;
        this.unsubscribe = store.subscribe(() =>
            this.forceUpdate()
        );
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    setCoordinates() {
        const props = this.props;
        const { store } = this.context;
        const state = store.getState();

        return state.side == 'black'
            ? props.coordinates().reverse()
            : props.coordinates();
    }

    render() {
        let coordinates = this.setCoordinates();
        return (
            <div
                className={'board'}
            >
                {coordinates.map(coordinate =>
                    <Square
                        key={coordinates.indexOf(coordinate)}
                        id={coordinate}
                    />
                )}
            </div>
        );
    }
}
Board.contextTypes = {
    store: PropTypes.object
};

export default Board;
