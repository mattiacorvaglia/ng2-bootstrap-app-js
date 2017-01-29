/**
 * This is the main server code.
 *
 * @author     Mattia Corvaglia <corvagliamattia@gmail.com>
 * @see        http://www.mattiacorvaglia.com
 * @version    1.0.0
 * @since      1.0.0
 * @copyright  2017 Mattia Corvaglia All Rights Reserved.
 * @license    MIT
 */

'use strict';

// -----------------------------------------------------------------------------
// Import modules
var express = require('express');
var path    = require('path');

/// Uncomment the following to use render() instead of sendFile()
// var swig    = require('swig');     // The template engine

// -----------------------------------------------------------------------------
// Create express app
var app = express();

// -----------------------------------------------------------------------------
// Configure Express app
app.use(express.static('public'));    // Path for public files

/// Uncomment the following to use render() instead of sendFile()
// app.set('views', 'views');            // Where to find the HTML files used by 'render()'
// app.set('view engine', 'html');       // Which is the view engine used by 'render()'
// app.engine('html', swig.renderFile);  // Which is the template engine used by 'render()'

// -----------------------------------------------------------------------------
// Define routes
app.get('/', function(req, res) {
  /// Comment the following to use render() instead of sendFile()
  res.sendFile(path.join(__dirname + '/views/index.html')); // It needs the absolute path
  /// Uncomment the following to use render() instead of sendFile()
  // res.render('index.html');
});
app.get('/start', function(req, res) {
  res.json({ status: 'Process successfully started!' });
});
app.get('/stop', function(req, res) {
  res.json({ status: 'Process successfully stopped!' });
});

// -----------------------------------------------------------------------------
// Launch the server
app.listen(3000, function() {
  console.log('App listening on port 3000!');
});
