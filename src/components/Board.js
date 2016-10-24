import React from 'react';

import SquareContainer from '../containers/SquareContainer';


const Board = ({ coordinates }) => (
        <div
            className={'board'}
        >
            {coordinates.map(coordinate =>
                <SquareContainer
                    key={coordinates.indexOf(coordinate)}
                    id={coordinate}
                    coordinates={coordinates}
                />
            )}
        </div>
);

export default Board;
