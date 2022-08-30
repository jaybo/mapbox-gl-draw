var express = require('express');
var app = express();

app.get('/mapbox-gl.js', function(req, res) {
  res.sendFile(__dirname+'/node_modules/mapbox-gl/dist/mapbox-gl.js');
});

app.get('/mapbox-gl.css', function(req, res) {
    res.sendFile(__dirname+ '/node_modules/mapbox-gl/dist/mapbox-gl.css');
});

app.get('/bench/:name', function(req, res) {
    res.sendFile(__dirname + '/bench/index.html');
});

app.use('/debug', express.static(__dirname + '/debug'));
app.use('/dist', express.static(__dirname + '/dist'));


var port = process.env.PORT || 9967;

app.listen(port, function () {
    console.log('mapbox-gl-draw debug server running at http://localhost:' + port);
});
