import React from 'react';
import { connect } from 'react-redux';

import SideSelect from '../components/SideSelect';
import { toggleSide } from '../actions/index';


const mapStateToProps = (state) => ({
    active: state.game.active
});

const mapDispatchToProps = (dispatch) => ({
    onChange: (e) => { dispatch(toggleSide(e.target.value)) }
});

const SideContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(SideSelect);

export default SideContainer;
