/* Author:

*/

$(document).ready(function(){
  // On initial load, hide all sections except for the first one
  $('#guide section').slice(1).addClass('hidden');
});


// When the user clicks the prev link, hide the visible section and show the preceding section
// TODO: not working
$('#prev').click(function(event) {
  event.preventDefault();
  var currentPage = $('section:not(hidden)');
  currentPage.addClass('hidden').prev().removeClass('hidden');
});

// When the user clicks the next link, hide the visible section and show the succeeding section
// TODO: not working
$('#next').click(function(event) {
  event.preventDefault();
  $('section:not(hidden)')
    .addClass('hidden')
    .next()
    .removeClass('hidden');
});
