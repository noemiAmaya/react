import React, { Component } from 'react'
import './ConditionalRendering.css'

export default class ConditionalRendering extends Component {
    constructor(props) {
        super(props)
        this.state = {
            menuHidden: false
        }
        this.toggleSlider = this.toggleSlider.bind(this);
    }

    toggleSlider() {
        const{menuHidden}=this.state
        this.state({
            menuHidden: !menuHidden
        })
    }

    render() {
        const { menuHidden } = this.state;
        return (

            <div className='container'>
                <span className='square' hidden={menuHidden}>
                    <h1>Prueba</h1>
                </span>
                <button onClick={this.toggleSlider} className='button-menu' > Click me!</button>
            </div>
        );
    }
}
