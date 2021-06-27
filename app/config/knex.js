const environment = process.env.ENVIRONMENT || 'development';
const config = require('./env/db_env');
module.exports = require('knex')(config);