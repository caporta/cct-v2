import React from 'react';
import { connect } from 'react-redux';

import Board from '../components/Board';


const mapStateToProps = (state) => ({
    side: state.side
});

const BoardContainer = connect(
    mapStateToProps
)(Board);

export default BoardContainer;
