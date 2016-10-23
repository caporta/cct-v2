import React from 'react';


const ThemeSelect = ({ themes }) => (
    <div>
        <select className={'select select__theme'}>
            {themes().map(theme =>
                <option key={themes().indexOf(theme)} value={theme}>{theme}</option>
            )}
        </select>
    </div>
);

export default ThemeSelect;
