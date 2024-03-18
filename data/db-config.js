const knex = require('knex');

const configs = require('../knexfile');

const env = process.env.NODE_ENV || 'development'

module.exports = knex(configs[env])

//this is the code where the program decides which configuration for the database to use based on the env the program is running on. 