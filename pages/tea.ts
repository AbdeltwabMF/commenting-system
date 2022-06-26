import knex from '../database/knexcon'

const comments = knex('comment').select('*')
console.log(comments.toString())

comments
  .then((data) => {
    console.log(data)
  })
  .catch((err) => {
    console.log(err.message)
  })
  .finally(() => {
    console.log('finally')
    knex.destroy()
  })
