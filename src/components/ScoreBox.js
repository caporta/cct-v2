import React from 'react';

import ScoreContainer from '../containers/ScoreContainer';


const ScoreBox = () => (
    <div
        className={'box box__score'}
    >
        Final Score:
        <ScoreContainer />
    </div>
);

export default ScoreBox;
