# serverless framework for aliyun

## Feature
- Use the serverless framework
  - https://www.serverless.com/framework/docs/providers/aliyun/
- Use the Aliyun Function Compute
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

# How to use

## Prepare
- Aliyun RAM User credentials for Administrator
  - about the Aliyun RAM User
    - https://www.alibabacloud.com/help/doc-detail/122148.htm
  - Set the credentials bellow
  ```sh
  .aliyuncli/credentials
  ```
  - credentials example
  ```sh
  [default]
  aliyun_access_key_id = LTAxxxx
  aliyun_access_key_secret = caxxxxxx
  aliyun_account_id = 1234xxx
  ```

- Slack app having features bellow
  - Bots
  - Incoming Webhooks
- Slack Bot token Scopes
  - channels:read
  - chat:write
  - chat:write.customize
  - incoming-webhook
- Slack Bot User OAuth Access Token
  - token example
  ```
  xoxb-abcdef...
  ```


## Deploy
### Warning
This code works only on the Aliyun Function Compute by Time Trigger with payload

```sh
serverless deploy
```

## Payload and Timer Settings
#### payload example
```sh
{"token": "xoxb-abc", "channel": "#general"}
```

#### timer settings example
- https://www.alibabacloud.com/help/doc-detail/68172.htm
```sh
0 0 1 ? ? MON
```
