import React, { useState } from 'react';
import { Avatar, Checkbox } from '@assenti/rui-components';
import chee from './pictures/cheese.png';

function Cheese(props) {
  
    
    
    return (
       <div>
       

            {props.isCheese ? <Avatar
                iconSize="50%"
                img={chee} />
                : null} 

        </div>
       
    )

}

export default Cheese