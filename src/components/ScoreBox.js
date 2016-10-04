import React from 'react';

import ScoreDisplay from './scoreDisplay';

const ScoreBox = () => (
    <div
        className={'box box__score'}
    >
        Score Box
        <ScoreDisplay />
    </div>
);

export default ScoreBox;
