---
sidebar_position: 56
---

# combinepsbt

`combinepsbt ["psbt",...]`

Combine multiple partially signed bitgesell transactions into one transaction.

Implements the Combiner role.

## Argument #1 - txs

**Type:** json array, required

The base64 strings of partially signed transactions

```json
[
  "psbt",    (string) A base64 string of a PSBT
  ...
]
```

## Result

| Name | Type   | Description                                     |
| ---- | ------ | ----------------------------------------------- |
| str  | string | The base64-encoded partially signed transaction |

## Example usage (with RPC call)

```sh 
BGL-cli combinepsbt '["mybase64_1", "mybase64_2", "mybase64_3"]'
```