'use strict';

// cat JSON

var cats = {
    cat: [
        {
            id: 'cat01',
            name: 'Katie',
            image: 'http://placekitten.com/400/300',
            sourceURL: 'http://placekitten.com',
            source: 'placekitten.com'
        },
        {
            id: 'cat02',
            name: 'Charlotte',
            image: 'http://placekitten.com/g/400/300',
            sourceURL: 'http://placekitten.com',
            source: 'placekitten.com'
        }
    ]
};

cats.display = function(){
  for (var kitty = 0, kittyCount = cats.cat.length; kitty < kittyCount; kitty++){
    $('#cats').append(catUnit);

    var formatCatName = catName.replace('%data%', cats.cat[kitty].name);
    $('.cat-unit:last').append(formatCatName);

    var formatCatImage = catImage.replace('%data%', cats.cat[kitty].image);
      $('.cat-unit:last').append(formatCatImage);

    var formatCatSource  = catSource.replace('%data%', cats.cat[kitty].sourceURL + '">' + cats.cat[kitty].source);
      $('.cat-unit:last').append(formatCatSource);

    //var formatCatID = catID.replace('%data%', cats.cat[kitty].id);
     // $('.cat-unit:last').append(formatCatID);
  }
};



// use $(document).ready() for jQuery code in external js file
// $(function(){}) is shorthand for $(document).ready(function(){})

$(document).ready(function() {
  var numKitten = 0;
  $( '#kitten' ).click(function() {
    $( '#kitCount' ).text('I has been clicked ' + ++numKitten + ' times');
  });
});

cats.display();
