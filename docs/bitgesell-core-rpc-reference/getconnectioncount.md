---
sidebar_position: 46
---

# getconnectioncount

`getconnectioncount`

Returns the number of connections to other nodes.

## Result

| Name | Type    | Description          |
| ---- | ------- | -------------------- |
| n    | numeric | The connection count |

## Example usage (with RPC call)

```sh
BGL-cli getconnectioncount
```

```sh
curl --user myusername --data-binary '{"jsonrpc": "1.0", "id": "curltest", "method": "getconnectioncount", "params": []}' -H 'content-type: text/plain;' http://127.0.0.1:8334/
```
