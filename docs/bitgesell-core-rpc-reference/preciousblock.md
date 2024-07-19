---
sidebar_position: 21
---

# preciousblock

`preciousblock "blockhash"`

Treats a block as if it were received before others with the same work.

A later preciousblock call can override the effect of an earlier one.

The effects of preciousblock are not retained across restarts.

## Argument #1 - blockhash

**Type:** string, required

the hash of the block to mark as precious

## Result

null (json null)

## Example usage (with RPC call)

```sh
BGL-cli preciousblock "blockhash"
```

```sh
curl --user myusername --data-binary '{"jsonrpc": "1.0", "id": "curltest", "method": "preciousblock", "params": ["blockhash"]}' -H 'content-type: text/plain;' http://127.0.0.1:8334/
```
