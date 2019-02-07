const auth = require("../authentication/authentication")

module.exports = {

  getExpirationTimeFromToken: (token) => {
    let decodedToken = auth.decode(token)
    return decodedToken.payload.exp - decodedToken.payload.iat
  }
}