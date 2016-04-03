'use strict';

// cat JSON

var cats = {
    cat: [
        {
            id: 'cat01',
            name: 'Katie',
            images: 'http://placekitten.com/400/300'
        },
        {
            id: 'cat02',
            name: 'Charlotte',
            images: 'http://placekitten.com/g/400/300'
        }
    ]
};



// use $(document).ready() for jQuery code in external js file
// $(function(){}) is shorthand for $(document).ready(function(){})

$(document).ready(function() {
  var numKitten = 0;
  $( '#kitten' ).click(function() {
    $( '#kitCount' ).text('I has been clicked ' + ++numKitten + ' times');
  });
});
