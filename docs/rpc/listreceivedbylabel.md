---
sidebar_position: 112
---

# listreceivedbylabel

`listreceivedbylabel ( minconf include_empty include_watchonly )`

List received transactions by label.

## Argument #1 - minconf

**Type:** numeric, optional, default=1

The minimum number of confirmations before payments are included.

## Argument #2 - include_empty

**Type:** boolean, optional, default=false

Whether to include labels that haven’t received any payments.

## Argument #3 - include_watchonly

**Type:** boolean, optional, default=true for watch-only wallets, otherwise false

Whether to include watch-only addresses (see ‘importaddress’)

## Result

```json
[                                        (json array)
  {                                      (json object)
    "involvesWatchonly" : true|false,    (boolean) Only returns true if imported addresses were involved in transaction
    "amount" : n,                        (numeric) The total amount received by addresses with this label
    "confirmations" : n,                 (numeric) The number of confirmations of the most recent transaction included
    "label" : "str"                      (string) The label of the receiving address. The default label is ""
  },
  ...
]
```

## Example usage (with RPC call)

```sh
BGL-cli listreceivedbylabel
```

```sh
BGL-cli listreceivedbylabel 6 true
```

```sh
curl --user myusername --data-binary '{"jsonrpc": "1.0", "id": "curltest", "method": "listreceivedbylabel", "params": [6, true, true]}' -H 'content-type: text/plain;' http://127.0.0.1:8334/
```
