import React, { PropTypes } from 'react';


const CoordinateDisplay = ({ coordinate }) => (
    <div className={'display display__coordinate'}>
        {coordinate}
    </div>
);

CoordinateDisplay.propTypes = {
    coordinate: PropTypes.string.isRequired
};

export default CoordinateDisplay;
