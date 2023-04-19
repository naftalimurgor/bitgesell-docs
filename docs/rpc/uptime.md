---
sidebar_position: 32
---

# uptime

`uptime`

Returns the total uptime of the server.

## Result

| Name | Type    | Description                                            |
| ---- | ------- | ------------------------------------------------------ |
| n    | numeric | The number of seconds that the server has been running |

## Example usage (with RPC call)

```sh
BGL-cli uptime
```

```sh
curl --user myusername --data-binary '{"jsonrpc": "1.0", "id": "curltest", "method": "uptime", "params": []}' -H 'content-type: text/plain;' http://127.0.0.1:8334/
```
