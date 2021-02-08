/*
	API call example
  https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?valcode=EUR&date=20210119&json

  response example
   {
    "r030": 978,
    "txt": "Євро",
    "rate": 34.0158,
    "cc": "EUR",
    "exchangedate": "19.01.2021"
  }


*/
import getSymbolFromCurrency from 'currency-symbol-map'

const CURRENCY = {
  UAH: { rate: 1 },
  USD: {},
  EUR: {}
}

const CURRENCY_KEYS = Object.keys(CURRENCY)

CURRENCY_KEYS.forEach((key) => {
  CURRENCY[key].cc = key
  CURRENCY[key].sign = getSymbolFromCurrency(key)
})

const CURRENCY_VALUES = Object.values(CURRENCY)

export { CURRENCY, CURRENCY_KEYS, CURRENCY_VALUES }
