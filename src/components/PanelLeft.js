import React from 'react';

import StartBox from './StartBox';
import SideBox from './SideBox';
import ThemeBox from './ThemeBox';

const PanelLeft = ({ coordinates, sides, themes }) => (
    <div
        className={'panel panel__left'}
    >
        <StartBox coordinates={coordinates} />
        <SideBox sides={sides} />
        <ThemeBox themes={themes} />
    </div>
);

export default PanelLeft;
