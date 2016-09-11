dbURIs = {
  test: "mongodb://localhost/kit-dodgeball-test",
  development: "mongodb://localhost/kit-dodgeball-app",
  production: process.env.MONGOLAB_URI || "mongodb://localhost/kit-dodgeball-app"
}

module.exports = function(env) {
  return dbURIs[env];
}