import React, { Component, PropTypes } from 'react';
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

BoardContainer.propTypes = {
    side: PropTypes.string.isRequired,
    coordinates: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
    side: state.side
});

export default connect(
    mapStateToProps
)(BoardContainer);
