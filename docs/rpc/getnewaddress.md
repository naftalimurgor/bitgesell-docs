---
sidebar_position: 93
---

# getnewaddress

`getnewaddress ( "label" "address_type" )`

Returns a new bitgesell address for receiving payments.

If ‘label’ is specified, it is added to the address book so payments received with the address will be associated with ‘label’.

## Argument #1 - label

**Type:** string, optional, default=""

The label name for the address to be linked to. It can also be set to the empty string "" to represent the default label. The label does not need to exist, it will be created if there is no label by the given name.

## Argument #2 - address_type

**Type:** string, optional, default=set by -addresstype

The address type to use. Options are "legacy", "p2sh-segwit", and "bech32".

## Result

| Name | Type   | Description               |
| ---- | ------ | ------------------------- |
| str  | string | The new bitgesell address |

## Example usage (with RPC call)

```sh
BGL-cli getnewaddress
```

```sh
curl --user myusername --data-binary '{"jsonrpc": "1.0", "id": "curltest", "method": "getnewaddress", "params": []}' -H 'content-type: text/plain;' http://127.0.0.1:8334/
```
