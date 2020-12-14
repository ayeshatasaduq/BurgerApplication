import React, { useState } from 'react';
import { Avatar , Checkbox } from '@assenti/rui-components';
import sal from './pictures/salad.jpg';

function Salad(props) {
   
   
    
    return (
    
    <div>
            {props.isSalad ? <Avatar
                iconSize="50%"
                img={sal} />
         : null} 
            
        </div>
    )
}

export default Salad