module.exports = {
  apps: [
    {
      name: 'api',
      namespace: 'serve',
      script: 'node_modules/.bin/rw',
      args: 'serve api',
      instances: 'max',
      exec_mode: 'cluster',
      wait_ready: false,
      listen_timeout: 10000,
    },
  ],
}
