import React, { Component } from 'react';
import ReactDOM from 'react-dom';

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
