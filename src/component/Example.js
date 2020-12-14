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
    const [varsalad, setSalad] = useState(false);
    const [varmushrooms, setMushrooms] = useState(false);
    const [varcheese, setCheese] = useState(false);
    const [varmeat, setMeat] = useState(false);
    const [varveg, setVeg] = useState(false);
    const [varpepperoni, setPepperoni] = useState(false);
    return (
        <div>
            <Card className={"footer bg-yellow"}>
            <div className={"back"}>
            <Logo/>
                <h2>myBurger</h2>
            </div>
            <div className="pa-50">
                <h1 icon={<Icon name="chevron-down" />}>Make Your Own Burger </h1><Icon name="chevron-down" color="night" />
            </div>
                <div className={"continue"}>
                    <Checkout/>
            </div> 
            </Card>
            <Divider/>
            
                <div className={"pa-50 colorofitems"}>
                    <h2 >Choose items you want to add to your burger:</h2>
                <Checkbox
                    checked={varmeat}
                    label="Meat"
                    onChange={() => setMeat(!varmeat)} />
                <Checkbox
                    checked={varveg}
                    label="Vegetables"
                    onChange={() => setVeg(!varveg)} />
                <Checkbox
                    checked={varcheese}
                    label="Cheese"
                    onChange={() => setCheese(!varcheese)} />
                <Checkbox
                    checked={varmushrooms}
                    label="Mushrooms"
                    onChange={() => setMushrooms(!varmushrooms)} />

                <Checkbox
                    checked={varpepperoni}
                    label="Pepperoni"
                    onChange={() => setPepperoni(!varpepperoni)} />
                <Checkbox
                    checked={varsalad}
                    label="Salad"
                    onChange={() => setSalad(!varsalad)} />
                </div>
            <Divider />
            <div className={"footer colorofslider"}>
                
                <Meat isMeat={varmeat} />
                <Vegetable isVeg={varveg}/>
                <Cheese isCheese={varcheese}/>
                <Mushroom isMushrooms={varmushrooms} />
                <Pepperoni isPepperoni={varpepperoni}/>
                <Salad isSalad={varsalad} />
            </div>
        
        </div>
        )
}

export default Example