import React, { Component } from 'react';

import Square from './Square';


class Board extends Component {
    setCoordinates() {
        const props = this.props;
        return props.side == 'black'
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
                        coordinates={coordinates}
                    />
                )}
            </div>
        );
    }
}

export default Board;
