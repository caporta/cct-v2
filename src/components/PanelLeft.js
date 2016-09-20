import React from 'react';
import ReactDOM from 'react-dom';

import StartBox from './StartBox.js';
import SideBox from './SideBox.js';
import ThemeBox from './ThemeBox.js';

const PanelLeft = () => (
    <div
        className={'panel panel__left'}
    >
        <StartBox />
        <SideBox />
        <ThemeBox />
    </div>
);

export default PanelLeft;
