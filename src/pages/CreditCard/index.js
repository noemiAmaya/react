import React, { Component } from 'react'
//COMPONENTS
import Header from '../../components/Header'
import CreditCards from './component/credit'
// CSS
import './CreditCard.css'

export default class CreditCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            credit: {}
        }
        this.handleData = this.handleData.bind(this)
    }

    handleData(credit) {
        this.setState({
            credit
        })
        console.log(this.state)
    }

    render() {
        let { credit } = this.state
        return (
            <div className='Container'>
                <div>
                    <Header>
                        <h1>Credit Card</h1>
                    </Header>

                    <div className='data-input'>
                        <div className='credit-card'>
                            <div className={credit.typeCard + " front-card"}>
                                <h2 >{credit.name}</h2>
                                <h2 >{credit.number}</h2>
                                <h2 > {credit.expiration} </h2>
                                <h2 >{credit.cvv}</h2>
                            </div>
                        </div>
                        <div className='form-data'>
                            <CreditCards handleData={this.handleData} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}