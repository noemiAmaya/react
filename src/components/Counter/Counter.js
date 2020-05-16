// Ejercicio

/**
 Crear un nuevo componente  <Counter />
 Easy pisi - El counter va iniciar en 0 y quiero que impriman en consola
 cuando el counter pase por un numero multiplo de 8
 Hard - Van a detener el contador cuando llegue a 20
 Additional - El contador puede ir de N en N, por medio de un prop
 */

import React, { Component } from "react";

export default class Counter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            counter: 0
        }
    }

    componentDidMount() {
        this.counterInterval = setInterval(() => {
            if (this.state.counter >= 20) {
                clearInterval(this.counterInterval)
                
            } else {
                this.setState((prevState) => ({
                    counter: prevState.counter + 1
                
                }))
            }
            if (this.state.counter % 8 === 0) {
                console.log(this.state.counter)
            }

        }, 1000)
    }

    render() {

        return (
            <div>
                <h1> {this.state.counter}</h1>
            </div>

        )
    }


}