import React, { Component } from 'react'
import './Form.css'
export default class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {
            mxp: " ",
            usd: " ",
        }
        this.handleInputCurrencyMxp = this.handleInputCurrencyMxp.bind(this);

    }

    handleInputCurrencyMxp(event) {
        console.log(event.target.value)
        let currencyMxn = event.target.value
        let usd = parseInt(currencyMxn) * 23.44
        this.setState({
            mxp:currencyMxn,
            usd: usd
        });

    }

    render() {
        const { mxp, usd } = this.state
        return (
            <div className="form-container">
                <form>
                    <input className='input-container'
                        value={mxp}
                        onChange={this.handleInputCurrencyMxp}
                        placeholder={'mxp'}></input>
                </form>
                <p> La cantidad ingresada es igual a {usd} dolares</p>
            </div>
        );
    } 
}