import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Square from '../components/Square';
import * as actionCreators from '../actions/index';
import { getRandomCoordinate } from '../utilities/index';


class SquareContainer extends Component {
    getMatch() {
        const { id, coordinate } = this.props;
        return id === coordinate;
    }

    handleClick() {
        const { coordinates, actions } = this.props;
        let coordinate = getRandomCoordinate(coordinates);
        actions.updateCoordinate(coordinate);
        actions.incrementScore();
    }

    render() {
        const { active, id } = this.props;
        let match = this.getMatch();
        return(
            <Square
                onClick={this.handleClick.bind(this)}
                id={id}
                active={active}
                match={match}
            />
        );
    }
}

const mapStateToProps = (state) => ({
    active: state.game.active,
    coordinate: state.coordinate
});

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(actionCreators, dispatch)
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SquareContainer);
