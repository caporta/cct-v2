import React from 'react';
import ReactDOM from 'react-dom';

import Board from './Board';
import PanelLeft from './PanelLeft';
import PanelRight from './PanelRight';


const Table = () => (
    <div
        className={'table'}
    >
        <PanelLeft />
        <Board />
        <PanelRight />
    </div>
);

export default Table;
