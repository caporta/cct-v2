import React from 'react';


const ProgressBar = ({ active }) => (
    <div
        className={active ? 'bar bar__progress bar__progress--active' : 'bar bar__progress'}>
    </div>
);

export default ProgressBar;
