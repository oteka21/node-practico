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

function list (table) {
  return db[table]
}

function get (table, id) {
  const col = list(table)
  return col.filter(item => item.id === id)
}

function upset (table, data) {
  db[table].push(data)
}

function remove (table, id) {
  return true
}

module.exports = {
  list,
  get,
  upset,
  remove
}
