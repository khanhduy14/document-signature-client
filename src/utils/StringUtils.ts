export default class StringUtils {

  static isEmailValid(email: string): boolean {
    // eslint-disable-next-line no-useless-escape
    let re = /^(?=[a-zA-Z0-9@._%+-]{6,254}$)[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,8}[a-zA-Z]{2,63}$/
    return re.test(String(email).toLowerCase())
  }

  static validatePassword(password: string): boolean {
    // eslint-disable-next-line no-useless-escape
    let re = /^[A-Za-z\d@$!%*?&_-]{8,}$/
    return re.test(String(password).toLowerCase())
  }

  static createUUID() {
    var dt = new Date().getTime()
    var uuid = 'xxxxxxxx-xxxx-4xxxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      var r = (dt + Math.random()*16)%16 | 0
      dt = Math.floor(dt/16)
      return (c == 'x' ? r : (r&0x3|0x8)).toString(16)
    })
    return uuid
  }
}
