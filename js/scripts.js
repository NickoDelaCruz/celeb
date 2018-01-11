$(document).ready(function() {
  $("form#celeb").submit(function(event) {
    var gender = $("input:radio[name=gender]:checked").val();

  if (gender==="male") {
    $('#ResultA').show();
    $('#ResultB').hide();
  } else {
    $('#ResultA').hide();
    $('#ResultB').show();
  }
    event.preventDefault();
  });
});
