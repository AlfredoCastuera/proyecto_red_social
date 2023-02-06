const sluglify = (str) => {
  return str.toLowerCase().replaceAll(" ", "-")
}
export default sluglify;