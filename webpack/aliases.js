const path = require('path');

module.exports = {
    App: path.resolve(__dirname, '../src/app/'),
    Components: path.resolve(__dirname, '../src/app/components/'),
    Core: path.resolve(__dirname, '../src/core/'),
    Pages: path.resolve(__dirname, '../src/app/pages/'),
    Redux: path.resolve(__dirname, '../src/core/redux/'),
    Routing: path.resolve(__dirname, '../src/core/routing/'),
    Util: path.resolve(__dirname, '../src/core/util')
};