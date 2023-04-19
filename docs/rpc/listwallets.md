---
sidebar_position: 117
---

# listwallets

`listwallets`

Returns a list of currently loaded wallets.

For full information on the wallet, use "getwalletinfo"

## Result

```json
[           (json array)
  "str",    (string) the wallet name
  ...
]
```

## Example usage (with RPC call)

```sh
BGL-cli listwallets
```

```sh
curl --user myusername --data-binary '{"jsonrpc": "1.0", "id": "curltest", "method": "listwallets", "params": []}' -H 'content-type: text/plain;' http://127.0.0.1:8334/
```
