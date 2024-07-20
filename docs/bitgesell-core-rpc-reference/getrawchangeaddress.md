---
sidebar_position: 94
---

# getrawchangeaddress

`getrawchangeaddress ( "address_type" )`

Returns a new bitgesell address, for receiving change.

This is for use with raw transactions, NOT normal use.

## Argument #1 - address\_type

**Type:** string, optional, default=set by -changetype

The address type to use. Options are "legacy", "p2sh-segwit", and "bech32".

## Result

| Name | Type   | Description |
| ---- | ------ | ----------- |
| str  | string | The address |

## Example usage (with RPC call)

```sh 
BGL-cli getrawchangeaddress
```

```sh
curl --user myusername --data-binary '{"jsonrpc": "1.0", "id": "curltest", "method": "getrawchangeaddress", "params": []}' -H 'content-type: text/plain;' http://127.0.0.1:8334/
```