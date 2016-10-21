import React, { Component, PropTypes } from 'react';

import { toggleSide } from '../actions/index';


class SideSelect extends Component {
    componentDidMount() {
        const { store } = this.context;
        this.unsubscribe = store.subscribe(() =>
            this.forceUpdate()
        );
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    render() {
        const props = this.props;
        const { store } = this.context;
        const state = store.getState();
        let disabled = state.game.active ? 'disabled' : ''
        return (
            <div>
                <select
                    disabled={disabled}
                    onChange={(e) =>
                        store.dispatch(toggleSide(e.target.value))
                    }
                >
                    {props.sides().map(side =>
                        <option
                            key={props.sides().indexOf(side)}
                            value={side}
                        >
                            {side}
                        </option>
                    )}
                </select>
            </div>
        );
    }
}
SideSelect.contextTypes = {
    store: PropTypes.object
};

export default SideSelect;
