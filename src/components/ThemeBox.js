import React from 'react';

import ThemeSelect from './ThemeSelect';


const ThemeBox = ({ themes }) => (
    <div
        className={'box box__theme'}
    >
        Choose Theme:
        <ThemeSelect themes={themes} />
    </div>
);

export default ThemeBox;
