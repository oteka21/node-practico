const db = {
  user: [
    {
      id: 1,
      name: 'Leonardo',
      lastName: 'Oteca',
      age: 24
    },
    {
      id: 2,
      name: 'Juan',
      lastName: 'Barreto',
      age: 24
    },
    {
      id: 3,
      name: 'Carlos',
      lastName: 'Oteca',
      age: 24
    }
  ]
}

async function list (table) {
  return db[table]
}

async function get (table, id) {
  const col = await list(table)
  return col.filter(item => item.id === id)[0]
}

async function upset (table, data) {
  db[table].push(data)
  const res = await list(table)
  return res
}

async function remove (table, id) {
  return true
}

module.exports = {
  list,
  get,
  upset,
  remove
}
