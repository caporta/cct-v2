import React, { PropTypes } from 'react';


const ScoreDisplay = ({ active, score }) => {
    let finalScore = !active ? score : null
    return (
        <div className={'display display__score'}>
            {finalScore}
        </div>
    );
};

ScoreDisplay.propTypes = {
    active: PropTypes.bool.isRequired
};

export default ScoreDisplay;
