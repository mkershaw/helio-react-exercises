import React, { Component } from 'react'

import "./Style.css"


class Main extends Component {

    state = {
        textValue: '',
        listText: [],
        list: ['Street', 'Sportster', 'Dyna', 'SoftTail', 'V-Rod', 'Touring', 'CVO', 'Trike', 'Limited']

    }
    addToList = () => this.setState({ list: [this.state.textValue, ...this.state.list] })


    handleChange = (event) => this.setState({
        textValue: event.target.value

    })


    listItems = this.state.list.map((item) =>
        <li> {item}</li>)
    addNumbers = () => {


    }

    handleChangeInput1 = (e) => {

    }


    render() {
        return (
            <div>

                <h1> Keylogger </h1>
                <div>
                    <span> Input Text:</span>
                    <input type="text" onChange={this.handleChange} />
                    <button class="addItemButton" onClick={this.addToList}>Add Item</button>
                    <br></br>
                </div>
                <div>
                    <span> Value:</span>
                    <span>{this.state.textValue}</span>
                </div>
                <hr />


                <div>
                    <div id="arraylist" class="newExercise">
                        <h1> Array List </h1>

                        <ul> <h2>I Love Harley Motorcycles:</h2>



                            {this.state.list.map((item) =>
                                <li> {item}</li>)}
                        </ul>

                        <hr />

                    </div>
                </div>
                <div>



                </div>
            </div>
        )

    }
}



export default Main