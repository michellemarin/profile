"use strict";







/* Functions */

var myProfile = function () {
  $.ajax({
    url: 'https://api.github.com/users/michellemarin'
  }).done(function (data) {

    $('.info').text(JSON.stringify(data));

    setProfileInfo(data);

  }).fail(function (data) {

    $('.error').removeClass('fade').text(data.responseJSON.message);

    setTimeout(function () {
      $('.error').addClass('fade');
    }, 1000);

  });
};


var setProfileInfo = function (myProfile) {
$('#profileContainer').html(
_.template($('#profileTemplate').html())(myProfile));
}


/* API calls */
