import React, { useState } from 'react';
import { Card, Checkbox } from '@assenti/rui-components';
import vege from './pictures/vegetables.jpg';

function Vegetable() {
    
    const [varveg, setVeg] = useState(false);

    return (

        <Card style={{ width: '16%', height: '20%', backgroundColor: `#f5f5dc`, margin: '20px' }}>
            < img src={vege} width="150" height="100" />
            <h2 style={{ alignContent: 'center' }}>Vegetables</h2>
            <p style={{ textAlign: 'left' }}> Rs. 90/- </p>

            <Checkbox fill
                checked={varveg}
                label="Vegetables"
                onChange={() => setVeg(!varveg)} />
        </Card>
      
    )

}

export default Vegetable