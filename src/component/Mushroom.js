import React, { useState } from 'react';
import { Avatar, Checkbox } from '@assenti/rui-components';
import mush from './pictures/mushrooms.jpg';

function Mushroom(props) {
  
  
    
    return (
        <div>
       
         
        {
        props.isMushrooms ? <Avatar
            iconSize="50%"
            img={mush} />
            : null
    }

        </div>
    )

}

export default Mushroom