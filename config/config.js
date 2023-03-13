require('dotenv').config()

module.exports = {
  "development": {
    // "url": "postgresql://trivinova-backend-api:jcTM58tr_mcdc813v5hM4Q@novasharx-cluster-5935.6wr.cockroachlabs.cloud:26257/trivinova?sslmode=verify-full",
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    host: "novasharx-cluster-5935.6wr.cockroachlabs.cloud",
    port: 26257,
    // ssl: "verify-full",
    dialect: "postgres",
    dialectOptions: {
      encrypt: true
    }
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}