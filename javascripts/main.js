console.log('This would be the main JS file.');
var externalReviews = 'https://debarron.github.io/assets/external_reviews.json';
var conferences = 'https://debarron.github.io/assets/conferences.json';
var awards = 'https://debarron.github.io/assets/awards.json';

// function to write external reviews
// function to write publications
// function to write awards
function appendAwards(jsonAwards){
  var awardsHTML = ""
  jsonAwards.forEach(function(year){
    awardsHTML += "<ul><strong>" + year + "</strong>"

    year.forEach(function(award){awardsHTML += "<li>" + award + "<li>"});

    awardsHTML += "</ul>"
  });
}


$(document).ready(function() {

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
