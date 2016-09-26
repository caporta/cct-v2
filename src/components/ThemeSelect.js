import React from 'react';
import ReactDOM from 'react-dom';


const ThemeSelect = ({ themes }) => (
    <div>
        <select>
            {themes().map(theme =>
                <option key={themes().indexOf(theme)} value={theme}>{theme}</option>
            )}
        </select>
    </div>
);

export default ThemeSelect;
