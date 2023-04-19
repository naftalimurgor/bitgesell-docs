---
sidebar_position: 116
---

# listwalletdir

`listwalletdir`

Returns a list of wallets in the wallet directory.

## Result

```json
{                        (json object)
  "wallets" : [          (json array)
    {                    (json object)
      "name" : "str"     (string) The wallet name
    },
    ...
  ]
}
```

## Example usage (with RPC call)

```sh
BGL-cli listwalletdir
```

```sh
curl --user myusername --data-binary '{"jsonrpc": "1.0", "id": "curltest", "method": "listwalletdir", "params": []}' -H 'content-type: text/plain;' http://127.0.0.1:8334/
```
