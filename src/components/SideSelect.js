import React from 'react';
import ReactDOM from 'react-dom';


const SideSelect = ({ sides }) => (
    <div>
        <select>
            {sides().map(side =>
                <option key={sides().indexOf(side)} value={side}>{side}</option>
            )}
        </select>
    </div>
);

export default SideSelect;
