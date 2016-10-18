import React from 'react';

import StartButton from './StartButton';


const StartBox = ({ coordinates }) => (
    <div
        className={'box box__start'}
    >
        <StartButton coordinates={coordinates} />
    </div>
);

export default StartBox;
