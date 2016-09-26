import React from 'react';

import Square from './Square';


const Board = ({ coordinates }) => (
    <div
        className={'board'}
    >
        {coordinates().map(coordinate =>
            <Square key={coordinates().indexOf(coordinate)} id={coordinate} />
        )}
    </div>
);

export default Board;
