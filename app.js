#!/usr/bin/env node
const generateConfig = require('./generateConfig')
async function app() {
  // 如果需要手动修改anonymous_token，需要注释generateConfig调用
  await generateConfig()
  require('./server').serveNcmApi({
    checkVersion: true,
  })
}
app()

module.exports = app
