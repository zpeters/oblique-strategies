module.exports = {
  apps: [
    {
      name: 'api',
      script: 'node_modules/.bin/rw',
      args: 'serve api',
      instances: 'max',
      exec_mode: 'cluster',
      wait_ready: false,
      listen_timeout: 10000,
    },
  ],
}
