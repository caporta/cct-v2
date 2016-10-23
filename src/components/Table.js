import React from 'react';

import PanelLeft from './PanelLeft';
import Board from './Board';
import PanelRight from './PanelRight';


const Table = ({ coordinates, sides, themes }) => (
    <div
        className={'table'}
    >
        <PanelLeft
            coordinates={coordinates}
            sides={sides}
            themes={themes} />
        <Board coordinates={coordinates} />
        <PanelRight />
    </div>
);

export default Table;
