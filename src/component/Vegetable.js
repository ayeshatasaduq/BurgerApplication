import React, { useState } from 'react';
import { Avatar, Checkbox } from '@assenti/rui-components';
import vege from './pictures/vegetables.jpg';

function Vegetable(props) {
    
    
    return (

        <div>
       

            {props.isVeg ? <Avatar
                iconSize="50%"
                img={vege} />
                : null} 

        </div>
      
    )

}

export default Vegetable