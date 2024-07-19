---
sidebar_position: 96
---

# getreceivedbylabel

`getreceivedbylabel "label" ( minconf )`

Returns the total amount received by addresses with `label` in transactions with at least \[minconf\] confirmations.

## Argument #1 - label

**Type:** string, required

The selected label, may be the default label using "".

## Argument #2 - minconf

**Type:** numeric, optional, default=1

Only include transactions confirmed at least this many times.

## Result

| Name | Type    | Description                                      |
| ---- | ------- | ------------------------------------------------ |
| n    | numeric | The total amount in BGL received for this label. |

## Example usage (with RPC call)

Amount received by the default label with at least 1 confirmation:

```sh
BGL-cli getreceivedbylabel ""
```

Amount received at the tabby label including unconfirmed amounts with zero confirmations:

```sh
BGL-cli getreceivedbylabel "tabby" 0
```

The amount with at least 6 confirmations:

```sh
BGL-cli getreceivedbylabel "tabby" 6
```

As a JSON-RPC call:

```sh
curl --user myusername --data-binary '{"jsonrpc": "1.0", "id": "curltest", "method": "getreceivedbylabel", "params": ["tabby", 6]}' -H 'content-type: text/plain;' http://127.0.0.1:8334/
```
