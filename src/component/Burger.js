import React, { Component } from 'react'
import './styleSheet.css'
class Burger extends Component {
    constructor() {
        super()
        
        this.state = {
            array:[],
            vegetables: false,
            meat: false,
            cheese: false,
            pepperoni: false,
            mushrooms: false,
            salad: false,
      
    }
    }

   

    addVeg=() => {
        if (this.state.vegetables === false) {
            this.state.array.push("Vegetables")
            this.setState({
                vegetables: true,
                array: this.state.array
            });
        }
        else {
            alert(`You have already added this.`)
        }
        
    }

    addMeat = () => {
        if (this.state.meat === false) {
            this.state.array.push("Meat")
            this.setState({
                meat: true,
                array: this.state.array
            })
        }
        else {
            alert(`You have already added this.`)
        }
        
    }

    addCheese = () => {
        if (this.state.cheese === false) {
            this.state.array.push("Cheese")
            this.setState({
                cheese: true,
                array: this.state.array
            })
        }
        else {
            alert(`You have already added this.`)
        }
      
    }

    addPepperoni = () => {
        if (this.state.pepperoni === false) {
            this.state.array.push("Pepperoni")
            this.setState({
                pepperoni: true,
                array: this.state.array
            })
        }
        else {
            alert(`You have already added this.`)
        }
    }

    addMushrooms = () => {
        if (this.state.mushrooms===false) {
            this.state.array.push("Mushrooms")
            this.setState({
                mushrooms: true,
                array: this.state.array
            })
        }
        else {
            alert(`You have already added this.`)
        }
    }

    addSalad = () => {
        if (this.state.salad == false) {
            this.state.array.push("Salad")
            this.setState({
                salad: true,
                array: this.state.array

            })
        }
        else {
            alert(`You have already added this.`)
        }
        
    }

    render() {

        
        return (
            <div>
                <h1>Choose Combination for your burger. </h1>

                <table style={{ border: "1px solid black" }} className={`center`}>
                <tr>
                        <th><button onClick={this.addVeg}>Add Vegetable</button></th>
                    <th><button onClick={this.addMeat}>Add Meat</button></th>
                    <th><button onClick={this.addCheese}>Add Cheese Slice</button></th>
                    <th><button onClick={this.addPepperoni}>Add Pepperoni</button></th>
                        <th><button onClick={this.addMushrooms}>Add Mushrooms</button></th>
                        <th><button  onClick={this.addSalad}>Add Salad</button></th>
                </tr>
                    </table>

                <h3> You have added following to your burger </h3>
                <ul className={`text`}>

                        {this.state.array.map((item) => (
                            <li>{item}</li>
                        ))}
                    </ul>
                   

                    
    </div >

  )
    }  
}

export default Burger