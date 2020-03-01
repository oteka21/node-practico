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
  ],
  auth: [
    {
      id: '5VCVmDI72UlB2Oy4uQqjx',
      username: 'eldita',
      password: '$2b$05$6MWx6Z7BJnr9sp3zslS2NOQ/28urQBe1SDG/g5albUAv.HOtkdoAK'
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
  if (!db[table]) {
    db[table] = []
  }

  db[table].push(data)
  return data
}

async function remove (table, id) {
  return true
}

async function query (table, query) {
  const col = await list(table)
  const keys = Object.keys(query)
  const key = keys[0]
  return col.filter(item => item[key] === query[key])[0] || null
}

module.exports = {
  list,
  get,
  upset,
  remove,
  query
}
