import bcrypt from 'bcrypt'
import dotenv from 'dotenv'
dotenv.config({ path: '../../.env' })

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  //create new table user
  return knex.schema
    .createTable('user', (table) => {
      table.increments('user_id').primary().unique().notNullable(),
        table.string('name', 255).notNullable(),
        table.string('lastname', 255).notNullable(),
        table.string('email', 255).notNullable().unique(),
        table.string('password', 255).notNullable(),
        table.string('refresh_token', 255),
        table.timestamps(true, true)
    })
    .then(() => {
      //create initial user account
      return knex('user').insert([
        {
          name: process.env.INIT_NAME,
          lastname: process.env.INIT_LASTNAME,
          email: process.env.INIT_EMAIL,
          password: bcrypt.hashSync(process.env.INIT_PASSWORD, 8),
        },
        {
          name: 'Jiří',
          lastname: 'Novák',
          email: 'jnovak@email.cz',
          password: bcrypt.hashSync('password', 8),
        },
        {
          name: 'Antonín',
          lastname: 'Dvořák',
          email: 'antdv@email.cz',
          password: bcrypt.hashSync('password', 8),
        },
      ])
    })
}

/*
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema.dropTable('user').then(() => {})
}
