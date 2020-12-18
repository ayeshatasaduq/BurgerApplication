import React, { useState } from 'react';
import { Card, Checkbox } from '@assenti/rui-components';
import sal from './pictures/salad.jpg';

function Salad() {
    const [varsalad, setSalad] = useState(false);
   
   
    
    return (
    
        <Card style={{
            width: '16%', height: '20%', backgroundColor: `#b0c4de`, margin: '20px'}}>
            < img src={sal} width="150" height="100" />
            <h2 style={{ alignContent: 'center' }}>Salad</h2>
            <p style={{ textAlign: 'left' }}> Rs. 40/- </p>

            <Checkbox
                checked={varsalad}
                label="Salad"
                onChange={() => setSalad(!varsalad)} />
        </Card>
    )
}

export default Salad