"use strict";

/* Templates */

var withAjax = function () {
  $.ajax({
    method: "GET",
    url:
    "https://api.github.com/users/michellemarin/repos"
  }).done(function(response) {
    //do something
  });
}

/* Functions */




/* Jquery */




/* API calls */
