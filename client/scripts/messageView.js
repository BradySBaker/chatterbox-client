// Whereas MessagesView controls the entire list of messages,
// MessageView is responsible for rendering a single message.

//I - string //
//O - string
window.escaper = function(string) {
  if (string === '' || string === null) {
    return 'Empty';
  }
  var result = string.replace('<', '');
  result = result.replace('>', '');
  result = result.replace('http', '');
  result = result.replace('www', '');
  return result;

};
var MessageView = {
  // Learn more about Underscore's templating capability
  // here: https://underscorejs.org/#template.
  // TODO: Update this template accordingly.
  /*render: _.template(`
      <!--
      <div class="chat">
        <div class="username"></div>
        <div class="text"></div>
      </div>
      -->
    `)*/
  render: function(message) { //{} Appends everything
    $(document).ready(function() {
      var $chat = $('<div class="chat"></div>');
      var username = escaper(message.username);
      var $username = $(`<div class="username">${username}</div>`);
      var text = escaper(message.text);
      var $text = (`<div class="text">${text}</div>`);
      $('#chats').append($chat);
      $chat.append([$username, $text]);
    });
  }
};