import React, { useState } from 'react';
import { Card, Button, Icon , Divider , Checkbox} from '@assenti/rui-components';
import './styleSheet.css'
import Logo from './Logo'
import Meat from './Meat'
import Vegetable from './Vegetable'
import Mushroom from './Mushroom'
import Cheese from './Cheese'
import Pepperoni from './Pepperoni'
import Salad from './Salad'
import Checkout from './CheckoutButton'

function Example() {
    const [price] = 0;
    return (
        <div>
            <Card className={"footer bg-yellow"}>
            <div className={"back"}>
            <Logo/>
                <h2>myBurger</h2>
            </div>
            <div className="pa-20">
                <h1 icon={<Icon name="chevron-down" />}>Make Your Own Burger </h1><Icon name="chevron-down" color="night" />
            </div>
                <div className={"continue"}>
                    <Checkout/>
            </div> 
            </Card>
            <Divider/>
            
                <div className={"pa-50 colorofitems footer"}>
                <h2 >Choose items you want to add to your burger:</h2>
            </div>
            <div className={"pa-5 colorofitems footer"}>
                <Cheese />
                <Meat />
                <Pepperoni />
                <Vegetable />
                <Mushroom />
                <Salad/>
                </div>
            <Divider />
           
        
        </div>
        )
}

export default Example