---
sidebar_position: 5
---

# `getblockcount`
Returns the block height of the most updated/synced working chain.

## `getblockcount`

> The genesis block has height 0

## Result
Type: numberic
Description: the current block height

### Example usage (with RPC call)

```sh
BGL-cli getblockcount
```

```sh
curl --user myusername --data-binary '{"jsonrpc": "1.0", "id": "curltest", "method": "getblockcount", "params": []}' -H 'content-type: text/plain;' http://127.0.0.1:8334/
```