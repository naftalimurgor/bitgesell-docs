---
sidebar_position: 110
---

# listlockunspent

`listlockunspent`

Returns list of temporarily unspendable outputs.

See the lockunspent call to lock and unlock transactions for spending.

## Result

```json
[                      (json array)
  {                    (json object)
    "txid" : "hex",    (string) The transaction id locked
    "vout" : n         (numeric) The vout value
  },
  ...
]
```

## Example usage (with RPC call)

List the unspent transactions:

```sh
BGL-cli listunspent
```

Lock an unspent transaction:

```sh
BGL-cli lockunspent false "[{\"txid\":\"a08e6907dbbd3d809776dbfc5d82e371b764ed838b5655e72f463568df1aadf0\",\"vout\":1}]"
```

List the locked transactions:

```sh
BGL-cli listlockunspent
```

Unlock the transaction again:

```sh
BGL-cli lockunspent true "[{\"txid\":\"a08e6907dbbd3d809776dbfc5d82e371b764ed838b5655e72f463568df1aadf0\",\"vout\":1}]"
```

As a JSON-RPC call:

```sh
curl --user myusername --data-binary '{"jsonrpc": "1.0", "id": "curltest", "method": "listlockunspent", "params": []}' -H 'content-type: text/plain;' http://127.0.0.1:8334/
```
