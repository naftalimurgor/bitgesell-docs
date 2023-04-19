---
sidebar_position: 18
---

# gettxout

`gettxout "txid" n ( include_mempool )`

Returns details about an unspent transaction output.

## Argument #1 - txid

**Type:** string, required

The transaction id

## Argument #2 - n

**Type:** numeric, required

vout number

## Argument #3 - include_mempool

**Type:** boolean, optional, default=true

Whether to include the mempool. Note that an unspent output that is spent in the mempool won’t appear.

## Result

```json
{                             (json object)
  "bestblock" : "hex",        (string) The hash of the block at the tip of the chain
  "confirmations" : n,        (numeric) The number of confirmations
  "value" : n,                (numeric) The transaction value in BGL
  "scriptPubKey" : {          (json object)
    "asm" : "hex",            (string)
    "hex" : "hex",            (string)
    "reqSigs" : n,            (numeric) Number of required signatures
    "type" : "hex",           (string) The type, eg pubkeyhash
    "addresses" : [           (json array) array of bitgesell addresses
      "str",                  (string) bitgesell address
      ...
    ]
  },
  "coinbase" : true|false     (boolean) Coinbase or not
}
```

## Example usage (with RPC call)

Get unspent transactions:

```sh
BGL-cli listunspent
```

View the details:

```sh
BGL-cli gettxout "txid" 1
```

As a JSON-RPC call:

```sh
curl --user myusername --data-binary '{"jsonrpc": "1.0", "id": "curltest", "method": "gettxout", "params": ["txid", 1]}' -H 'content-type: text/plain;' http://127.0.0.1:8334/
```
