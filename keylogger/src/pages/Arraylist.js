import React, { Component } from 'react'
import "./Style.css"

state = {
    list: ['Street', 'Sportster', 'Dyna', 'SoftTail', 'V-Rod', 'Touring', 'CVO', 'Trike', 'Limited']
}
listItems = this.state.list.map((item) =>
    <li> {item}</li>)

render() {
    return (
        <div>
            <div id="arraylist" class="newExercise">
                <h1> Array List </h1>

                <ul> <h2>I Love Harley Motorcycles:</h2>

                    {this.state.list.map((item) =>
                        <li> {item}</li>)}
                </ul>

            </div>
        </div>
            
    export default Main
