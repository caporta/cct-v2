import React from 'react';
import ReactDOM from 'react-dom';

import SideSelect from './SideSelect';


const SideBox = ({ sides }) => (
    <div
        className={'box box__side'}
    >
        <SideSelect sides={sides} />
    </div>
);

export default SideBox;
