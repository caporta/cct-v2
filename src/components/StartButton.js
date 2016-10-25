import React from 'react';


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

export default StartButton;
