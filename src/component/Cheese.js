import React, { useState } from 'react';
import { Card, Checkbox } from '@assenti/rui-components';
import chee from './pictures/cheese.png';

function Cheese() {
  
    const [varcheese, setCheese] = useState(false);
    
    return (
        <Card style={{ width: '16%', height: '20%', backgroundColor: `#f0fff0`, margin: '20px' }}>
            < img src={chee} width="150" height="100" />
            <h2 style={{ alignContent: 'center' }}> Cheese</h2>
            <p style={{ textAlign: 'left' }}> Rs. 80/- </p>
            <Checkbox
                checked={varcheese}
                label="Cheese"
                onChange={() => setCheese(!varcheese)} />
        </Card>
       
    )

}

export default Cheese