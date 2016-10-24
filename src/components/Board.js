import React, { Component } from 'react';

import Square from './Square';


class Board extends Component {
    setCoordinates() {
        const { side, coordinates } = this.props;
        return side == 'black'
            ? coordinates().reverse()
            : coordinates();
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
                        coordinates={coordinates}
                    />
                )}
            </div>
        );
    }
}

export default Board;
