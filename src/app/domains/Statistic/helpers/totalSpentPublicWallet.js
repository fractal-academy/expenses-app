const totalSpentPublicWallet = (data) => {
  const totalSpentArr = []
  data?.map((item) => {
    if (!item.privateWallet) totalSpentArr.push(+item.price)
  })
  const totalSpentPublicWallet = totalSpentArr.reduce((a, b) => a + b, 0)
  return totalSpentPublicWallet
}
export default totalSpentPublicWallet
