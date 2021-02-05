async function deleteURL(reference) {
  let url = await reference.delete()
  return url
}

export default deleteURL
