const siteRoutes = require('./site')

function route(app) {
    app.use('/', siteRoutes);
}

module.exports = route