import React from 'react';
import ReactDOM from 'react-dom';

import Board from './Board';
import PanelLeft from './PanelLeft';
import PanelRight from './PanelRight';


const Table = ({ coordinates }) => (
    <div
        className={'table'}
    >
        <PanelLeft />
        <Board coordinates={coordinates}/>
        <PanelRight />
    </div>
);

export default Table;
