import React, { Component } from 'react';

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

        return state.sideSelector.side == 'black'
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
                    <Square key={coordinates.indexOf(coordinate)} id={coordinate} />
                )}
            </div>
        );
    }
}
Board.contextTypes = {
    store: React.PropTypes.object
};

export default Board;
