import React, { useState } from 'react';
import { Card, Checkbox, Button , Icon} from '@assenti/rui-components';
import chee from './pictures/cheese.png';



function Cheese() {
  
    const [varcheese, setCheese] = useState(false);
    
    return (
        
        <Card style={{ width: '16%', height: '20%', backgroundColor: `#f5f5dc`, margin: '20px' }}>
            < img src={chee} width="150" height="100" />
            <h2 style={{ alignContent: 'center' }}> Cheese</h2>
            <p style={{ textAlign: 'left' }}> Rs. 80/- </p>
            
            
            <Checkbox fill
                checked={varcheese}
                label="cheese"
                onChange={() => setCheese(!varcheese)} />
       
            </Card>
       
    )

}

export default Cheese