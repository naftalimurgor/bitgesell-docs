---
sidebar_position: 25
---

# verifychain

`verifychain ( checklevel nblocks )`

Verifies blockchain database.

## Argument #1 - checklevel

**Type:** numeric, optional, default=3, range=0-4

How thorough the block verification is:

- level 0 reads the blocks from disk
- level 1 verifies block validity
- level 2 verifies undo data
- level 3 checks disconnection of tip blocks
- level 4 tries to reconnect the blocks
- each level includes the checks of the previous levels

## Argument #2 - nblocks

**Type:** numeric, optional, default=6, 0=all

The number of blocks to check.

## Result

| Name        | Type    | Description     |
| ----------- | ------- | --------------- |
| true\|false | boolean | Verified or not |

## Example usage (with RPC call)

```sh
BGL-cli verifychain
```

```sh
curl --user myusername --data-binary '{"jsonrpc": "1.0", "id": "curltest", "method": "verifychain", "params": []}' -H 'content-type: text/plain;' http://127.0.0.1:8334/
```
