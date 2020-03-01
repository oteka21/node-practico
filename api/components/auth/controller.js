const auth = require('../../../auth')
const bcrypt = require('bcrypt')
const TABLE = 'auth'

module.exports = function (injectedStore) {
  let store = injectedStore
  if (store) {
    store = require('../../../store/dummy')
  }

  async function login (username, password) {
    const data = await store.query(TABLE, { username })

    console.log(data.password)

    return bcrypt.compare(password, data.password)
      .then(sonIguales => {
        console.log(sonIguales)
        if (sonIguales) {
        // crear token
          return auth.sign(data)
        } else {
          throw new Error('informacion invalida!')
        }
      })
  }

  async function upset (data) {
    const authData = {
      id: data.id
    }

    if (data.username) {
      authData.username = data.username
    }

    if (data.password) {
      authData.password = await bcrypt.hash(data.password, 5)
    }
    // console.log(authData)
    await store.upset(TABLE, authData)
    return data
  }

  return {
    upset,
    login
  }
}
