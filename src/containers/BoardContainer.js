import React, { Component } from 'react';
import { connect } from 'react-redux';

import Board from '../components/Board';


class BoardContainer extends Component {
    setCoordinates() {
        const { side, coordinates } = this.props;
        return side == 'black'
            ? coordinates().reverse()
            : coordinates();
    }

    render() {
        let coordinates = this.setCoordinates();
        return(
            <Board
                coordinates={coordinates}
            />
        );
    }
}

const mapStateToProps = (state) => ({
    side: state.side
});

export default connect(
    mapStateToProps
)(BoardContainer);
