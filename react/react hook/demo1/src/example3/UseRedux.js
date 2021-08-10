import React from 'react';
import Buttons from './Button';
import ShowArea from './showArea';
import {Color} from './color'

function UseRedux() {
    return (
        <div>
            <Color>
                <ShowArea />
                <Buttons />
            </Color>
            
        </div>
    )
}

export default UseRedux

