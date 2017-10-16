const webpackDevMiddleware= require('webpack-dev-middleware');  
const webpackHotMiddleware= require('webpack-hot-middleware');  
const config= require('./webpack.config.js');

const webpack = require('webpack')
const path = require('path')
const express = require('express')
const history = require('connect-history-api-fallback');

const app           = express(),  
      DIST_DIR      = path.join(__dirname, "build"),
      HTML_FILE     = path.join(DIST_DIR, "index.html"),
          PORT      = 7700,
      compiler      = webpack(config);

    app.use(history())
	app.set("port", process.env.PORT || PORT);
    app.use(webpackDevMiddleware(compiler, {
        publicPath: config.output.publicPath
    }));

    app.use(webpackHotMiddleware(compiler));

    app.get("*", (req, res, next) => {
        compiler.outputFileSystem.readFile(HTML_FILE, (err, result) => {
            if (err) {
                return next(err);
            }
            res.set('content-type', 'text/html');
            res.send(result);
            res.end();
        });
    });
    app.listen(app.get("port"));
    console.log(`Listening at http://localhost:${PORT}`)
