import React from 'react';

import CoordinateContainer from '../containers/CoordinateContainer';


const CoordinateBox = () => (
    <div
        className={'box box__coordinate'}
    >
        Coordinate:
        <CoordinateContainer />
    </div>
);

export default CoordinateBox;
