/**
 * Helper function that loads patterns from mustache files, and makes them
 *  available to use in our JS files.
 * @param  {array}    patterns  List of pattern names to load
 * @param  {Function} callback  Function to execute when all patterns have been
 *                              loaded.
 */
function loadPatterns(patterns, callback) {
  var generated = {};
  var requests = [];

  patterns.forEach(function(pattern) {
    requests.push(jQuery.get('/js/mustache/' + pattern + '.mustache', function(template) {
      generated[pattern] = template;
    }));
  });

  jQuery.when(requests).done(callback(generated));
}
