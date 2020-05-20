import React, { Component } from 'react'
import './Form.css'
export default class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {
            mxp: "",
            usd: "",
            euro: ""
        }
        this.handleInputCurrencyMxp = this.handleInputCurrencyMxp.bind(this);
        this.handleCurrencyUsd = this.handleCurrencyUsd.bind(this);
        this.handleCurrencyEuro = this.handleCurrencyEuro.bind(this);

    }

    handleInputCurrencyMxp(event) {
        console.log(event.target.value)
        let currencyMxp = event.target.value
        let usd = parseInt(currencyMxp) * 23.44
        let euro = parseInt(currencyMxp) * 25.47
        this.setState({
            mxp: currencyMxp,
            usd: usd,
            euro: euro
        });

    }

    handleCurrencyUsd(event) {
        console.log(event.target.value)
        let currencyUsd = event.target.value
        let mxp = parseInt(currencyUsd) * 23.21
        let euro = parseInt(currencyUsd) * 0.91
        this.setState({
            mxp: mxp,
            usd: currencyUsd,
            euro: euro
        });

    }

    handleCurrencyEuro(event) {
        console.log(event.target.value)
        let currencyEuro = event.target.value
        let usd = parseInt(currencyEuro) * 1.10
        let mxp = parseInt(currencyEuro) * 25.49
        this.setState({
            mxp: mxp,
            usd: usd,
            euro: currencyEuro
        });

    }

    render() {
        const { mxp, usd, euro } = this.state
        return (
            <div className="form-container">
                <form>
                    <input className='input-container'
                        value={mxp}
                        onChange={this.handleInputCurrencyMxp}
                        placeholder={'mxp'} />

                    <input className='input-container'
                        value={usd}
                        onChange={this.handleCurrencyUsd}
                        placeholder={'usd'} />

                    <input className='input-container'
                        value={euro}
                        onChange={this.handleCurrencyEuro}
                        placeholder={'euro'} />
                </form>

            </div>
        );
    }
}