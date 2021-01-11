import React, { useState } from 'react';
import { Card, Checkbox } from '@assenti/rui-components';
import mea from './pictures/meat.jpg';
function Meat() {
    const [varmeat, setMeat] = useState(false);
    return (

        <Card style={{
            width: '16%', height: '20%', backgroundColor: `#f5f5dc` , margin: '20px' }}>
            < img src={mea} width="150" height="100" />
            <h2 style={{ alignContent: 'center' }}>Meat</h2>
            <p style={{ textAlign: 'left' }}> Rs. 100/- </p>

            <Checkbox fill
                checked={varmeat}
                label="Meat"
                onChange={() => setMeat(!varmeat)} />
        </Card>
  )  
    }
    
export default Meat