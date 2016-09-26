import React from 'react';
import ReactDOM from 'react-dom';

import ThemeSelect from './ThemeSelect';


const ThemeBox = ({ themes }) => (
    <div
        className={'box box__theme'}
    >
        <ThemeSelect themes={themes} />
    </div>
);

export default ThemeBox;
