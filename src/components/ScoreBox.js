import React from 'react';

import ScoreDisplay from './scoreDisplay';


const ScoreBox = () => (
    <div
        className={'box box__score'}
    >
        Final Score:
        <ScoreDisplay />
    </div>
);

export default ScoreBox;
