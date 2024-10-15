// Write your JS code here
import {Component} from 'react'

import './index.css'

const CryptocurrencyItem = props => {
  const {cryptocurrencyDetails} = props
  const {currencyLogo, currencyName, usdValue, euroValue} =
    cryptocurrencyDetails

  return (
    <li className="crypto-currency-list-item">
      <img src={currencyLogo} className="currency-logo" alt={currencyName} />
      <p>{currencyName}</p>
      <p>{usdValue}</p>
      <p>{euroValue}</p>
    </li>
  )
}
export default CryptocurrencyItem
