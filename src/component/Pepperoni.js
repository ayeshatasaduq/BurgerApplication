import React, { useState } from 'react';
import { Avatar, Checkbox } from '@assenti/rui-components';
import pepper from './pictures/pepperoni.jpg';

function Pepperoni(props) {
    
    
   
    return (
      <div>
       

            {
                props.isPepperoni ? <Avatar
                    iconSize="50%"
                    img={pepper} />
            : null
    } 
    </div>
        
    )

}

export default Pepperoni