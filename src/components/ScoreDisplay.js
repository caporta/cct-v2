import React from 'react';


const ScoreDisplay = ({ active, score }) => {
    let finalScore = !active ? score : null
    return (
        <div className={'display display__score'}>
            {finalScore}
        </div>
    );
};

export default ScoreDisplay;
