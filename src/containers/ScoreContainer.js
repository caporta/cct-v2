import React from 'react';
import { connect } from 'react-redux';

import ScoreDisplay from '../components/ScoreDisplay';


const mapStateToProps = (state) => ({
    active: state.game.active,
    score: state.score
});

const ScoreContainer = connect(
    mapStateToProps
)(ScoreDisplay);

export default ScoreContainer;
