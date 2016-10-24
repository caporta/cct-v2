import React from 'react';
import { connect } from 'react-redux';

import Square from '../components/Square';


const mapStateToProps = (state) => ({
    active: state.game.active,
    coordinate: state.coordinate
});

const SquareContainer = connect(
    mapStateToProps
)(Square);

export default SquareContainer;
