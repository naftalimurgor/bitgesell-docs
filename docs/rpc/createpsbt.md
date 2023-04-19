---
sidebar_position: 59
---

# createpsbt

`createpsbt [{"txid":"hex","vout":n,"sequence":n},...] [{"address":amount},{"data":"hex"},...] ( locktime replaceable )`

Creates a transaction in the Partially Signed Transaction format.

Implements the Creator role.

## Argument #1 - inputs

**Type:** json array, required

The json objects

```json
[
  {                       (json object)
    "txid": "hex",        (string, required) The transaction id
    "vout": n,            (numeric, required) The output number
    "sequence": n,        (numeric, optional, default=depends on the value of the 'replaceable' and 'locktime' arguments) The sequence number
  },
  ...
]
```

## Argument #2 - outputs

**Type:** json array, required

The outputs (key-value pairs), where none of the keys are duplicated.

That is, each address can only appear once and there can only be one ‘data’ object. For compatibility reasons, a dictionary, which holds the key-value pairs directly, is also accepted as second parameter.

```json
[
  {                       (json object)
    "address": amount,    (numeric or string, required) A key-value pair. The key (string) is the bitgesell address, the value (float or string) is the amount in BGL
  },
  {                       (json object)
    "data": "hex",        (string, required) A key-value pair. The key must be "data", the value is hex-encoded data
  },
  ...
]
```

## Argument #3 - locktime

**Type:** numeric, optional, default=0

Raw locktime. Non-0 value also locktime-activates inputs

## Argument #4 - replaceable

**Type:** boolean, optional, default=false

Marks this transaction as BIP125 replaceable.

Allows this transaction to be replaced by a transaction with higher fees. If provided, it is an error if explicit sequence numbers are incompatible.

## Result

| Name | Type   | Description                                           |
| ---- | ------ | ----------------------------------------------------- |
| str  | string | The resulting raw transaction (base64-encoded string) |

## Example usage (with RPC call)

```sh
BGL-cli createpsbt "[{\"txid\":\"myid\",\"vout\":0}]" "[{\"data\":\"00010203\"}]"
```