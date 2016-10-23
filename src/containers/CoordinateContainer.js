import React from 'react';
import { connect } from 'react-redux';

import CoordinateDisplay from '../components/CoordinateDisplay';


const mapStateToProps = (state) => ({
    coordinate: state.coordinate
});

const CoordinateContainer = connect(
    mapStateToProps
)(CoordinateDisplay);

export default CoordinateContainer;
