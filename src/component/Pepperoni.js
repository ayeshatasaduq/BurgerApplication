import React, { useState } from 'react';
import { Card, Checkbox } from '@assenti/rui-components';
import pepper from './pictures/pepperoni.jpg';

function Pepperoni() {
 
    const [varpepperoni, setPepperoni] = useState(false);
    
   
    return (
      
       

        <Card style={{
            width: '16%', height: '20%', backgroundColor: `#f5f5dc`, margin: '20px' }}>
                < img src={pepper} width="150" height="100" />
                <h2 style={{ alignContent: 'center' }}>Pepperoni</h2>
                <p style={{ textAlign: 'left' }}> Rs. 65/- </p>

            <Checkbox fill
                    checked={varpepperoni}
                    label="Pepperoni"
                    onChange={() => setPepperoni(!varpepperoni)} />
            </Card>
    
        
    )

}

export default Pepperoni