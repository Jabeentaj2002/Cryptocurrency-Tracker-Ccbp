// Write your JS code here
import {Component} from 'react'

import CryptocurrencyItem from '../CryptocurrencyItem'

import './index.css'

class CryptocurrenciesList extends Component {
  // state = {cryptoCurrencyDataList: [], isDataFetched: true}

  // componentDidMount() {
  //   this.getCryptocurrencyDetails()
  // }

  // getCryptocurrencyDetails = async () => {
  //   const response = await fetch(
  //     'https://apis.ccbp.in/crypto-currency-converter',
  //   )
  //   const data = await response.json()

  //   //currencyLogo, currencyName, usdValue, euroValue

  //   const updateCryptocurrencyDetails = data.map(eachItem => ({
  //     id: eachItem.id,
  //     currencyLogo: eachItem.currency_logo,
  //     currencyName: eachItem.currency_name,
  //     usdValue: eachItem.usd_value,
  //     euroValue: eachItem.euro_value,
  //   }))
  //   this.setState({
  //     cryptoCurrencyDataList: updateCryptocurrencyDetails,
  //     isDataFetched: false,
  //   })
  // }

  render() {
    const {cryptoCurriences} = this.props
    return (
      <div className="cryptocurrency-list-container">
        <div>
          <h1 className="crypto-currency-heading">Cryptocurrency Tracker</h1>
          <img
            src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
            className="cryptocurrency-img"
            alt="cryptocurrency"
          />
        </div>
        <div className="cryptocurrency-list-items-container">
          <div className="cryptocurrency-heading-container">
            <p className="list-items-heading">Coin</p>
            <p>Type</p>
            <p>USD</p>
            <p>EURO</p>
          </div>
          <ul className="cryptocurrency-items-container">
            {cryptoCurriences.map(eachItem => (
              <CryptocurrencyItem
                key={eachItem.id}
                cryptocurrencyDetails={eachItem}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CryptocurrenciesList
