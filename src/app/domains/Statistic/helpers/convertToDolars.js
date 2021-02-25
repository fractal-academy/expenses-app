import moment from 'moment'

const convertToDollars = async (item) => {
  const date = moment(item.dateBuy.toDate()).format('YYYYMMDD')
  const url = `https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?valcode=USD&date=${date}&json`

  const response = await fetch(url)

  if (response.ok) {
    const json = await response.json()
    const newPrice = item.price / json[0].rate

    return {
      ...item,
      price: newPrice
    }
  }
}

export default convertToDollars
