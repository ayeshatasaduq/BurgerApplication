import React, { useState } from 'react';
import { Card, Button, Icon , Checkbox} from '@assenti/rui-components';
import './styleSheet.css'
import Logo from './Logo'
function Example() {

    const [meat, setMeat] = useState(false);  
    const [veg, setVeg] = useState(false);  
    const [cheese, setCheese] = useState(false);  
    const [pepperoni, setPepperoni] = useState(false);  
    const [mushrooms, setMushrooms] = useState(false);
    const [salad, setSalad] = useState(false);
    const checkout = () => {
        alert(`ThankYou`)
    }
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
                    <Button color="info" name="Checkout" icon={<Icon name="rocket" />} onClick={checkout}/>
            </div> 
            </Card>
            <div className={"footer  pa-50 bg-gray"}>
                <div className={"back"}>
                    <h2 >Choose items you want to add to your burger:</h2>
                    <Checkbox
                        checked={meat}
                        label="Meat"
                        onChange={() => setMeat(!meat)} />
                    <Checkbox
                        checked={veg}
                        label="Vegetables"
                        onChange={() => setVeg(!veg)} />
                    <Checkbox
                        checked={cheese}
                        label="Cheese"
                        onChange={() => setCheese(!cheese)} />
                    <Checkbox
                        checked={pepperoni}
                        label="Pepperoni"
                        onChange={() => setPepperoni(!pepperoni)} />
                    <Checkbox
                        checked={mushrooms}
                        label="Mushrooms"
                        onChange={() => setMushrooms(!mushrooms)} />
                    <Checkbox
                        checked={salad}
                        label="Salad"
                        onChange={() => setSalad(!salad)} />
                   

            </div>
        </div>
        </div>
        )
}

export default Example