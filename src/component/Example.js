import React, { useState } from 'react';
import { Card, Divider } from '@assenti/rui-components';
import './styleSheet.css'
import Logo from './Logo'
import Meat from './Meat'
import Vegetable from './Vegetable'
import Mushroom from './Mushroom'
import Cheese from './Cheese'
import Pepperoni from './Pepperoni'
import Salad from './Salad'
import Checkout from './CheckoutButton'
import { Link } from "react-router-dom";


function Example() {
    
    return (
        <div>
            
            <Card className="navbar navbar-expand-lg navbar-light fixed-top" style={{
                backgroundColor: "#f5f5dc" , 
            }}>
                <div className="container">
                    <Logo />
                    <Link className="navbar-brand" to={"/sign-in"}>Burger App</Link>

                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul className="navbar-nav ml-auto">
                            
                            <li className="nav-item">
                                <Link className="nav-link" to={"/sign-in"}>Sign out</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </Card>
         
            
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