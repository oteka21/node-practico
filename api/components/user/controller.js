const TABLE = 'user'

module.exports = function (injectedStore) {
  const store = injectedStore || require('../../../store/dummy')
  function list () {
    return store.list(TABLE)
  }
  function get (id) {
    return store.get(TABLE, id)
  }
  function upset (data) {
    return store.upset(TABLE, data)
  }
  return {
    list,
    get,
    upset
  }
}
