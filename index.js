'use strict';

exports.handler = (event, context, callback) => {
  const request = require('request');

  var payload = JSON.parse(JSON.parse(event.toString()).payload);

  var URL = 'https://slack.com/api/conversations.list';

  request.get({
      uri: URL,
      headers: {'Content-type': 'application/x-www-form-urlencoded'},
      qs: {'token': payload.token, 'exclude_archived': 'true'},
  }, function(err, req, data){

      var channels = []
      JSON.parse(data).channels.forEach(channel => {channels.push(channel)});

      var text = '興味のあるチャンネルに参加してみよう。\n使っていないチャンネルは削除するので Slack管理者 までご連絡ください。\n\n'
      channels.forEach(channel => {text += '#' + channel.name + '　description: ' + channel.purpose.value + '\n';});

      var URL = 'https://slack.com/api/chat.postMessage';

      request.post({
        uri: URL,
        headers: {'Content-type': 'application/json'},
        qs: {"token": payload.token, "channel": payload.channel, "text": text, "as_user": "true", "link_names": "true"},
      }, function(err, req, data){
        console.log(data)
        callback(null, data);
      });
  })
};
