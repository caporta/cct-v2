import React from 'react';
import { connect } from 'react-redux';

import ProgressBar from '../components/ProgressBar';


const mapStateToProps = (state) => ({
    active: state.game.active
});

const ProgressContainer = connect(
    mapStateToProps
)(ProgressBar);

export default ProgressContainer;
