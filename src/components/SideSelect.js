import React, { PropTypes } from 'react';

import { toggleSide } from '../actions/index';


const SideSelect = ({ sides }, { store }) => (
    <div>
        <select
            onChange={(e) =>
                store.dispatch(toggleSide(e.target.value))
            }
        >
            {sides().map(side =>
                <option
                    key={sides().indexOf(side)}
                    value={side}
                >
                    {side}
                </option>
            )}
        </select>
    </div>
);
SideSelect.contextTypes = {
    store: PropTypes.object
};

export default SideSelect;
