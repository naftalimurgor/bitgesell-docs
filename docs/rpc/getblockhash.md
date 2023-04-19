---
sidebar_position: 4
---

# `getblockhash`
Returns the hash of block at the block chain height provided

`getblockhash height`

## Argument#1 - Height

**`Type`**: numeric, required

### Result
Name: hex

Type: string

Descrption: The blockhash

```sh
BGL-cli getblockhash 1000
```

```sh
curl --user myusername --data-binary '{"jsonrpc": "1.0", "id": "curltest", "method": "getblockhash", "params": [1000]}' -H 'content-type: text/plain;' http://127.0.0.1:8334/
```