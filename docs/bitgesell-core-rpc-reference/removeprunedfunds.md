---
sidebar_position: 121
---
# removeprunedfunds

`removeprunedfunds "txid"`

Deletes the specified transaction from the wallet. Meant for use with pruned wallets and as a companion to importprunedfunds. This will affect wallet balances.

## Argument #1 - txid

**Type:** string, required

The hex-encoded id of the transaction you are deleting

## Result

null    (json null)

## Example usage (with RPC call)

```sh 
BGL-cli removeprunedfunds "a8d0c0184dde994a09ec054286f1ce581bebf46446a512166eae7628734ea0a5"
```

As a JSON-RPC call:

```sh
curl --user myusername --data-binary '{"jsonrpc": "1.0", "id": "curltest", "method": "removeprunedfunds", "params": ["a8d0c0184dde994a09ec054286f1ce581bebf46446a512166eae7628734ea0a5"]}' -H 'content-type: text/plain;' http://127.0.0.1:8334/
```