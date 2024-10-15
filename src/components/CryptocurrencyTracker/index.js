// Write your code here
import {Component} from 'react'

import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import CryptocurrenciesList from '../CryptocurrenciesList'

import './index.css'

class CryptocurrenctTracker extends Component {
  state = {cryptoCurrencyDataList: [], isDataFetched: true}

  componentDidMount() {
    this.getCryptocurrencyDetails()
  }

  getCryptocurrencyDetails = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()

    //currencyLogo, currencyName, usdValue, euroValue

    const updateCryptocurrencyDetails = data.map(eachItem => ({
      id: eachItem.id,
      currencyLogo: eachItem.currency_logo,
      currencyName: eachItem.currency_name,
      usdValue: eachItem.usd_value,
      euroValue: eachItem.euro_value,
    }))
    this.setState({
      cryptoCurrencyDataList: updateCryptocurrencyDetails,
      isDataFetched: false,
    })
  }

  render() {
    const {cryptoCurrencyDataList, isDataFetched} = this.state

    return (
      <div>
        {isDataFetched ? (
          <div data-testid="loader">
            <Loader type="Rings" color="#ffffff" height={80} width={80} />
          </div>
        ) : (
          <div className="cryptocurreny-tracker-container">
            <CryptocurrenciesList cryptoCurriences={cryptoCurrencyDataList} />
          </div>
        )}
      </div>
    )
  }
}

export default CryptocurrenctTracker
