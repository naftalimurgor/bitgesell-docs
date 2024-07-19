---
sidebar_position: 71
---

# utxoupdatepsbt

`utxoupdatepsbt "psbt" ( ["",{"desc":"str","range":n or [n,n]},...] )`

Updates all segwit inputs and outputs in a PSBT with data from output descriptors, the UTXO set or the mempool.

## Argument #1 - psbt

**Type:** string, required

A base64 string of a PSBT

## Argument #2 - descriptors

**Type:** json array, optional

An array of either strings or objects

```json
[
"", (string) An output descriptor
{ (json object) An object with an output descriptor and extra information
"desc": "str", (string, required) An output descriptor
"range": n or [n,n], (numeric or array, optional, default=1000) Up to what index HD chains should be explored (either end or [begin,end])
},
...
]
```

## Result

| Name | Type   | Description                                                         |
| ---- | ------ | ------------------------------------------------------------------- |
| str  | string | The base64-encoded partially signed transaction with inputs updated |

## Example usage (with RPC call)

```sh
BGL-cli utxoupdatepsbt "psbt"
```
