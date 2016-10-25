import React, { PropTypes } from 'react';


const StartButton = ({ disabled, onClick }) => (
    <div>
        <button
            disabled={disabled}
            className={'button button__start'}
            onClick={(e) => {
                onClick();
            }}
        >
            Start
        </button>
    </div>
)

StartButton.propTypes = {
    disabled: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
};

export default StartButton;
