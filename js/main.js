'use strict';

// cat JSON

var cats = {
    cat: [
        {
            id: 'cat01',
            name: 'Katie',
            image: 'http://placekitten.com/300/200',
            sourceURL: 'http://placekitten.com',
            source: 'placekitten.com',
            count: 0
        },
        {
            id: 'cat02',
            name: 'Charlotte',
            image: 'http://placekitten.com/g/300/200',
            sourceURL: 'http://placekitten.com',
            source: 'placekitten.com',
            count: 0
        }
    ]
};

cats.display = function(){
  for (var kitty = 0, kittyCount = cats.cat.length; kitty < kittyCount; kitty++){
    var formatCatID = catUnit.replace('%data%', cats.cat[kitty].id);
    $('#cats').append(formatCatID);
    // console.log(formatCatID);
    // console.log($('.cat-unit:last'));
    // console.log($('figure:last'));

    var formatCatName = catName.replace('%data%', cats.cat[kitty].name);
    $('figure:last').append(formatCatName);

    var formatCatImage = catImage.replace('%data%', cats.cat[kitty].image);
    $('figure:last').append(formatCatImage);
    $('figure:last').append('<figcaption class="kitInfo"></figcaption>');

    var formatCatSource  = catSource.replace('%data%', cats.cat[kitty].sourceURL + '">' + cats.cat[kitty].source);
    $('figure:last').append(formatCatSource);
  }
};

cats.click = function(){
  //
};


// use $(document).ready() for jQuery code in external js file
// $(function(){}) is shorthand for $(document).ready(function(){})

$(document).ready(function() {

  $('picture').click(function (event) {

    // identify which cat was clicked
    var catID = $(this).parent().attr("id");

    // find index of this cat in cat JSON
    for (var i = 0, numCats = cats.cat.length; i < numCats; i++) {
      if (cats.cat[i].id == catID) {
        var index = i;
      };
    };

    // get the parent and target the required sibling
    // var target = $(this).closest('figure').children('.kitInfo');
    var target = $(this).parent().children('.kitInfo');

    // update number of clicks for the particular cat.
    target.text('I has been clicked ' + ++cats.cat[index].count + ' times');
    // alternatively
    // $(this).next().text('I has been clicked ' + ++cats.cat[index].count + ' times');
  });
});

cats.display();
