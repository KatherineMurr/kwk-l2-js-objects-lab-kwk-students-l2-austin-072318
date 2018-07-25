var driver = {}
function updateDriverWithKeyAndValue(driver,key, value) {
  return Object.assign({}, {[key]: value});
}