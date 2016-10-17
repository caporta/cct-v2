import React from 'react';

import CoordinateDisplay from './coordinateDisplay';


const CoordinateBox = () => (
    <div
        className={'box box__coordinate'}
    >
        Coordinate:
        <CoordinateDisplay />
    </div>
);

export default CoordinateBox;
