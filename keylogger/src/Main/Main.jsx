import React, { Component } from 'react'

import "./Style.css"


class Main extends Component {

    state = {
        textValue: '',
        listText: [],
        list: ['Street', 'Sportster', 'Dyna', 'SoftTail', 'V-Rod', 'Touring', 'CVO', 'Trike', 'Limited']
    }

    handleChange = (event) => this.setState({
        textValue: event.target.value

    })

    listItems = this.state.list.map((item) =>
        <li> {item}</li>)

    render() {
        return (
            <div>

                <h1> Keylogger </h1>
                <div>
                    <span> Input Text:</span>
                    <input type="text" onChange={this.handleChange} />
                    <br></br>
                </div>
                <div>
                    <span> Value:</span>
                    <span>{this.state.textValue}</span>
                </div>
                <br></br>

                <div>
                    <div id="arraylist" class="newExercise">
                        <h1> Array List </h1>


                        <ul> I Love Harley Motorcycles:


                {this.state.list.map((item) =>
                            <li> {item}</li>)}
                        </ul>
                    </div>
                </div>
            </div>
        )

    }
}




export default Main