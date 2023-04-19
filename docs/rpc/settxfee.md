---
sidebar_position: 128
---
# settxfee

`settxfee amount`

Set the transaction fee per kB for this wallet. Overrides the global -paytxfee command line parameter.

Can be deactivated by passing 0 as the fee. In that case automatic fee selection will be used by default.

## Argument #1 - amount

**Type:** numeric or string, required

The transaction fee in BGL/kvB

## Result

| Name        | Type    | Description                |
| ----------- | ------- | -------------------------- |
| true\|false | boolean | Returns true if successful |

## Example usage (with RPC call)

```sh 
BGL-cli settxfee 0.00001
```

```sh
curl --user myusername --data-binary '{"jsonrpc": "1.0", "id": "curltest", "method": "settxfee", "params": [0.00001]}' -H 'content-type: text/plain;' http://127.0.0.1:8334/
```