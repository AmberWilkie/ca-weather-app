
var onReadyEvents = function(){
  $('#click_me').click(function() {
    var text = $('#text').val();
    $('#display_message').html(text);
  });
}
