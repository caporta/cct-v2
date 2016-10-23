import React from 'react';

import PanelLeft from './PanelLeft';
import BoardContainer from '../containers/BoardContainer';
import PanelRight from './PanelRight';


const Table = ({ coordinates, sides, themes }) => (
    <div
        className={'table'}
    >
        <PanelLeft
            coordinates={coordinates}
            sides={sides}
            themes={themes} />
        <BoardContainer coordinates={coordinates} />
        <PanelRight />
    </div>
);

export default Table;
