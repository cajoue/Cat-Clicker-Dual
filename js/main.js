'use strict';

// use $(document).ready() for jQuery code in external js file
$(document).ready(function() {
  var numKitten = 0;
  $( '#kitten' ).click(function() {
    $( '#kitCount' ).text('I has been clicked ' + ++numKitten + ' times');
  });
});
