import React, { Component } from 'react'

import "./Style.css"


class Main extends Component {

    state = {
        textValue: '',

    }
    handleChange = (event) => this.setState({
        textValue: event.target.value
    })

    render() {
        return (
            <div>

                <h1> Keylogger </h1>
                <div>

                    <span> Input Text:</span>
                    <input type="text" onChange={this.handleChange} />


                </div>
                <div>
                    <span> Value:</span>
                    <span>{this.state.textValue}</span>
                </div>


            </div>


        )



    }
}




export default Main