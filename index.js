const serverless = require('@serverless-devs/fc-http')
const app = require('./app.js')
exports.handler = serverless(app)
