const path = require('path');

module.exports = {
    mode: 'development',
    entry: './scr/7/task7.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    }
};
