import React, { useState } from 'react';
import { Card, Checkbox } from '@assenti/rui-components';
import mush from './pictures/mushrooms.jpg';

function Mushroom() {
    
    const [varmushrooms, setMushrooms] = useState(false);
  
    
    return (
        <Card style={{
            width: '16%', height: '20%', backgroundColor: `#f5f5dc`, margin: '20px' }}>
            < img src={mush} width="150" height="100" />
            <h2 style={{ alignContent: 'center' }}>Mushrooms</h2>
            <p style={{ textAlign: 'left' }}> Rs. 50/- </p>

            
            <Checkbox fill
                checked={varmushrooms}
                label="Mushrooms"
                onChange={() => setMushrooms(!varmushrooms)} />

        </Card>
    )

}

export default Mushroom