import React, { useState } from 'react';
import { Avatar, Checkbox } from '@assenti/rui-components';
import mea from './pictures/meat.jpg';
function Meat(props) {
    
    return (

        <div>
        
        
       
 {props.isMeat ? <Avatar
                iconSize="50%"
                img={mea} />
                : null} 

        </div>
  )  
    }
    
export default Meat