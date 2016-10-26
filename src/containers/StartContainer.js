import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import StartButton from '../components/StartButton';
import * as actionCreators from '../actions/index';


class StartContainer extends Component {
    activateGame() {
        const { coordinates, actions } = this.props;
        actions.resetScore();
        actions.toggleGame();
        actions.updateCoordinate(coordinates())
    }

    deactivateGame(timeout) {
        const { actions } = this.props;
        setTimeout(() => {
            actions.toggleGame();
            actions.resetCoordinate();
        }, timeout)
    }

    handleClick() {
        this.activateGame()
        this.deactivateGame(30000)
    }

    render() {
        const { active } = this.props;
        let disabled = active ? 'disabled' : ''
        return(
            <StartButton
                disabled={disabled}
                onClick={this.handleClick.bind(this)}
            />
        );
    }
}

StartContainer.propTypes = {
    active: PropTypes.bool.isRequired,
    coordinates: PropTypes.func.isRequired,
    actions: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
    active: state.game.active
});

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(actionCreators, dispatch)
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(StartContainer);
