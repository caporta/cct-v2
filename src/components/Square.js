import React, { Component, PropTypes } from 'react';


class Square extends Component {
    componentDidMount() {
        const { store } = this.context;
        this.unsubscribe = store.subscribe(() =>
            this.forceUpdate()
        );
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    getMatch() {
        const props = this.props;
        const { store } = this.context;
        const state = store.getState();
        return props.id == state.coordinate;
    }

    render() {
        const props = this.props;
        return(
            <div
                className={'square'}
                id={props.id}
                onClick={(e) =>
                    this.getMatch()
                }
            >
            </div>
        );
    }
}
Square.contextTypes = {
    store: PropTypes.object
};

export default Square;
