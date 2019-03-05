import React, { Component } from 'react'

import "./Style.css"


class Main extends Component {

    state = {
        textValue: '',
        listText: [],
        list: ['Street', 'Sportster', 'Dyna', 'SoftTail', 'V-Rod', 'Touring', 'CVO', 'Trike', 'Limited'],
        searchText: ''
    }
    addToList = () => this.setState({ list: [this.state.textValue, ...this.state.list] })


    handleChange = (event) => this.setState({
        textValue: event.target.value

    })
    handleSearch = (event) => this.setState({
        //list: this.state.list.filter(item=> item.includes(event.target.value))
        searchText: event.target.value
    })

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
                        <input type="text" onChange={this.handleSearch} />


                        <ul> <h2>I Love Harley Motorcycles:</h2>



                            {this.state.list.filter(item => item.includes(this.state.searchText)).map((item) =>
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