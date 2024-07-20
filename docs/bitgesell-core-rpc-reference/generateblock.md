---
sidebar_position: 33
---

# generateblock

`generateblock "output" ["rawtx/txid",...]`

Mine a block with a set of ordered transactions immediately to a specified address or descriptor (before the RPC call returns)

## Argument #1 - output

**Type:** string, required

The address or descriptor to send the newly generated bitgesell to.

## Argument #2 - transactions

**Type:** json array, required

An array of hex strings which are either txids or raw transactions.

Txids must reference transactions currently in the mempool. All transactions must be valid and in valid order, otherwise the block will be rejected.

```json
[
  "rawtx/txid",    (string)
  ...
]

## Result

{                    (json object)
  "hash" : "hex"     (string) hash of generated block
}
```

## Example usage

Generate a block to myaddress, with txs rawtx and mempool_txid:

```sh
BGL-cli generateblock "myaddress" '["rawtx", "mempool_txid"]'
``
```
