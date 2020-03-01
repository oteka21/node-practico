const nanoid = require('nanoid')
const auth = require('../auth')
const TABLE = 'user'

module.exports = function (injectedStore) {
  const store = injectedStore || require('../../../store/dummy')
  function list () {
    return store.list(TABLE)
  }

  function get (id) {
    return store.get(TABLE, id)
  }

  async function upset (data) {
    const { password, username, ...user } = data

    if (data.id) {
      user.id = data.id
    } else {
      user.id = nanoid()
    }

    if (username || password) {
      await auth.upset({
        id: user.id,
        username: username,
        password: password
      })
    }
    return store.upset(TABLE, user)
  }
  return {
    list,
    get,
    upset
  }
}
