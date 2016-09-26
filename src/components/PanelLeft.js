import React from 'react';

import StartBox from './StartBox';
import SideBox from './SideBox';
import ThemeBox from './ThemeBox';

const PanelLeft = ({ sides, themes }) => (
    <div
        className={'panel panel__left'}
    >
        <StartBox />
        <SideBox sides={sides} />
        <ThemeBox themes={themes} />
    </div>
);

export default PanelLeft;
