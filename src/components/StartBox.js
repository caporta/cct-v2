import React from 'react';

import StartContainer from '../containers/StartContainer';


const StartBox = ({ coordinates }) => (
    <div
        className={'box box__start'}
    >
        <StartContainer coordinates={coordinates} />
    </div>
);

export default StartBox;
