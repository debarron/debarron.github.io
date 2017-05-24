console.log('This would be the main JS file.');
var externalReviews = 'https://debarron.github.io/assets/external_reviews.json';
var conferences = 'https://debarron.github.io/assets/conferences.json'


$(document).ready(function() {
    var myItems;

    // Get the list of external reviews
    $.getJSON(externalReviews, function(data) {
        data.forEach(function(reviews){
          $("#external-review").append("<ul><strong>" +reviews.year + "</strong>");
          reviews.conferences.forEach(function(conf){
            $("#external-review").append("<ul>" + conf + "</ul>");
          });
          $("#external-review").append("</ul>");
        });
    });
});
