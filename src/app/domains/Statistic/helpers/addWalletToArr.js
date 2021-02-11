//return array with wallets
const addWalletToArr = (data) => {
  data.forEach((item) => {
    let wall = []
    for (let key in item.wallets) {
      let obj = { spentWallet: 0 }
      obj.name = key.toString()
      obj.spentWallet += item.wallets[key]
      wall.push(obj)
    }
    item.wallets = wall
  })
  return data
}
export default addWalletToArr
