## Feature
- Use the serverless framework for the Aliyun Function Compute
  - about the serverless framework
    - https://www.serverless.com/framework/docs/providers/aliyun/
  - about the Aliyun Function Compute
    - https://www.alibabacloud.com/help/product/50980.htm
- Get all public channels not archived of the Slack
  - https://api.slack.com/methods/conversations.list
- Post message for these channels to #general
  - https://api.slack.com/methods/chat.postMessage


## Version
```sh
Framework Core: 1.74.1
Plugin: 3.6.15
SDK: 2.3.1
Components: 2.31.12
```


## Prepare
- Aliyun RAM User credentials with Administrator
  - https://www.alibabacloud.com/help/doc-detail/122148.htm
- Slack app having features bellow
  - Bots
  - Incoming Webhooks
- Slack Bot token Scopes
  - channels:read
  - chat:write
  - chat:write.customize
  - incoming-webhook
- Slack Bot User OAuth Access Token
  - example
  ```
  xoxb-abcdef...
  ```


## Deploy
### Warning
This code works only the Aliyun Function Compute by Time Trigger with payload

```sh
serverless deploy
```

## Payload and Time Trigger
#### payload example
```sh
{"token": "xoxb-abc", "channel": "#general"}
```

#### time trigger example
```sh
0 0 1 ? ? MON
```
https://www.alibabacloud.com/help/doc-detail/68172.htm
