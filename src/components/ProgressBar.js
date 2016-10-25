import React, { PropTypes } from 'react';


const ProgressBar = ({ active }) => (
    <div
        className={active ? 'bar bar__progress bar__progress--active' : 'bar bar__progress'}>
    </div>
);

ProgressBar.propTypes = {
    active: PropTypes.bool.isRequired
};

export default ProgressBar;
