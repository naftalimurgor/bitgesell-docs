---
sidebar_position: 2
---

# `getbestblockhash`

## `getblockhash`
Returns the `hash` of the best (tip) block in the most-work fully validated chain.

## Result


## Examples

```sh
$ BGL-cli getbestblockhash
0000000000000195be3ee2b37e88f07919265da7eb2ff0f625cd45511c9eb48c
```

```sh
curl --user myusername --data-binary '{"jsonrpc": "1.0", "id": "curltest", "method": "getbestblockhash", "params": []}' -H 'content-type: text/plain;' http://127.0.0.1:8334/
```