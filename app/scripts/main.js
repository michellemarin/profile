"use strict";

/* Functions */

var myProfile = function () {
  $.get('https://api.github.com/users/michellemarin', function (data) {
    $('.info').html(JSON.stringify(data));
    setProfileInfo(data);
  });
};

var myRepos = function () {
$.getJSON('https://api.github.com/users/michellemarin/repos', function (data) {
  setRepoData(data);
});
};


var setProfileInfo = function (data) {
  var myTemplate = _.template($('#profileTemplate').html());
  $('#profileContainer').append(myTemplate(data));
};


var setRepoData = function (data) {
  _.each(data, function (repo) {
    var stupidTemplate = _.template($('#repoTemplate').html());
    $('#repoContainer').append(stupidTemplate(repo));
    console.log(stupidTemplate);
    console.log(repo);
  });
};

myProfile();
myRepos();


/* Accordian */

$(document).ready(function(){
  $('ul.tabs li').click(function(){
    var tab_id = $(this).attr('data-tab');

    $('ul.tabs li').removeClass('current');
    $('.tab-content').removeClass('current');

    $(this).addClass('current');
    $("#"+tab_id).addClass('current');
  });
});
