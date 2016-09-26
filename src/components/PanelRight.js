import React from 'react';
import ReactDOM from 'react-dom';

import CoordinateBox from './CoordinateBox';
import ScoreBox from './ScoreBox';

const PanelRight = () => (
    <div
        className={'panel panel__right'}
    >
        <CoordinateBox />
        <ScoreBox />
    </div>
);

export default PanelRight;
