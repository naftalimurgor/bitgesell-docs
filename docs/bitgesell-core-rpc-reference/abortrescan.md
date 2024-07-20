---
sidebar_position: 81
---

# abortrescan

`abortrescan`

Stops current wallet rescan triggered by an RPC call, e.g. by an importprivkey call.

Note: Use `getwalletinfo` to query the scanning progress.

## Result

| Name        | Type    | Description                      |
| ----------- | ------- | -------------------------------- |
| true\|false | boolean | Whether the abort was successful |

## Example usage (with RPC call)

Import a private key:

```sh
BGL-cli importprivkey "mykey"
```

Abort the running wallet rescan:

```sh
BGL-cli abortrescan
```

As a JSON-RPC call:

```sh
curl --user myusername --data-binary '{"jsonrpc": "1.0", "id": "curltest", "method": "abortrescan", "params": []}' -H 'content-type: text/plain;' http://127.0.0.1:8334/
```
