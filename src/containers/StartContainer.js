import React from 'react';
import { connect } from 'react-redux';

import StartButton from '../components/StartButton';


const mapStateToProps = (state) => ({
    active: state.game.active
});

const StartContainer = connect(
    mapStateToProps
)(StartButton);

export default StartContainer;
