module.exports = {
  url: 'http://192.168.88.76.xip.io:8091/#/login',
  elements: {
    body: 'body',
    username: 'input[name="username"]',
    password: 'input[name="password"]',
    submitButton: 'button[type=submit]',
    logOutButton: '.log.out.icon'
  },
  commands: [
    {
      login: async function (username, password) {
        await this.setValue('@username', username)
        await this.setValue('@password', password)
      }
    }
  ]

}
