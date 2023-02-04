import knex from 'knex'
import knexfile from '../knexfile.js'

const db_connection = knex(knexfile.development)

export default db_connection
