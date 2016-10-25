import React, { PropTypes } from 'react';


const ThemeSelect = ({ themes }) => (
    <div>
        <select className={'select select__theme'}>
            {themes().map(theme =>
                <option key={themes().indexOf(theme)} value={theme}>{theme}</option>
            )}
        </select>
    </div>
);

ThemeSelect.propTypes = {
    themes: PropTypes.func.isRequired
};

export default ThemeSelect;
