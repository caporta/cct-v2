import React from 'react';
import ReactDOM from 'react-dom';

import CoordinateBox from './CoordinateBox.js';
import ScoreBox from './ScoreBox.js';

const PanelRight = () => (
    <div
        className={'panel panel__right'}
    >
        <CoordinateBox />
        <ScoreBox />
    </div>
);

export default PanelRight;
