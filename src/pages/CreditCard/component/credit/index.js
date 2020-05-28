import React, { Component } from 'react'
import './CreditCards.css'
export default class CreditCards extends Component {
  constructor(props) {
    super(props)
    this.state = {
      number: '',
      name: '',
      expiration: '',
      cvv: '',
      typeCard: ''
    }
    this.handleChange = this.handleChange.bind(this)

  }
  handleChange({ target: { name, value } }) {
    let {number,typeCard}=this.state
    let digits= number.substring(0,2)
    if(digits >=4){
     typeCard= 'visa'
    }
    if(digits >=51 && digits<=55){
      typeCard='masterCard'
     }
    this.setState({
      [name]: value,
      typeCard
    },this.handleSendData)
    
  }

  handleSendData(){
    this.props.handleData(this.state)

  }

  render() {
    const { number, name, expiration, cvv } = this.state
    return (
      <form>

        <input
          placeholder={'Credit Holder'}
          name={'name'}
          value={name}
          onChange={this.handleChange}
        />
        <input
          type="number"
          max="16"
          placeholder={'6023-3494-3491-1239'}
          name={'number'}
          value={number}
          onChange={this.handleChange}
        />
        <input
          maxLength="4"
          placeholder={'10/26'}
          name={'expiration'}
          value={expiration}
          onChange={this.handleChange}
        />
        <input
          type="number"
          type="password"
          maxLength="3"
          placeholder={'CVV'}
          name={'cvv'}
          value={cvv}
          onChange={this.handleChange}
        />
      </form>
    )
  }
}
