async function getURL(reference) {
  let url = await reference.getDownloadURL()
  return url
}

export default getURL
