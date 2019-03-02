import React, { Component } from 'react'
import "./Style.css"

class Keylogger extends Component {

    state = {
        textValue: '',
        listText: [],

        handleChange = (event) => this.setState({
            textValue: event.target.value

        })


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
                    <br></br>
                </div>
                <div>
                    <span> Value:</span>
                    <span>{this.state.textValue}</span>
                </div>
                <hr />



            </div>

        </div >
    )

    }
}



export default Main
    }
}