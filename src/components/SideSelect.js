import React from 'react';



const SideSelect = ({ active, sides, onChange }) => {
    let disabled = active ? 'disabled' : ''
    return (
        <div>
            <select
                className={'select select__side'}
                disabled={disabled}
                onChange={(e) =>
                    onChange(e)
                }
            >
                {sides().map(side =>
                    <option
                        key={sides().indexOf(side)}
                        value={side}
                    >
                        {side}
                    </option>
                )}
            </select>
        </div>
    );
};

export default SideSelect;
