console.log('This would be the main JS file.');

$(document).ready(function() {
    var myItems;

    $.getJSON('assets/external_reviews.json', function(data) {
        myItems = data.items;

        myItems.forEach(function(element){
          console.log(myItems);
        });
    });
});
