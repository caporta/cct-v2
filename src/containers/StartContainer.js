import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import StartButton from '../components/StartButton';
import * as actionCreators from '../actions/index';
import { getRandomCoordinate } from '../utilities/index';


class StartContainer extends Component {
    activateGame() {
        const { coordinates, actions } = this.props;
        let coordinate = getRandomCoordinate(coordinates());
        actions.resetScore();
        actions.toggleGame();
        actions.updateCoordinate(coordinate)
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
