---
sidebar_position: 91
---

# getbalance


`getbalance ( "dummy" minconf include_watchonly avoid_reuse )`

Returns the total available balance.

The available balance is what the wallet considers currently spendable, and is thus affected by options which limit spendability such as -spendzeroconfchange.

## Argument #1 - dummy

**Type:** string, optional

Remains for backward compatibility. Must be excluded or set to "\*".

## Argument #2 - minconf

**Type:** numeric, optional, default=0

Only include transactions confirmed at least this many times.

## Argument #3 - include\_watchonly

**Type:** boolean, optional, default=true for watch-only wallets, otherwise false

Also include balance in watch-only addresses (see ‘importaddress’)

## Argument #4 - avoid\_reuse

**Type:** boolean, optional, default=true

(only available if avoid\_reuse wallet flag is set) Do not include balance in dirty outputs; addresses are considered dirty if they have previously been used in a transaction.

## Result

| Name | Type    | Description                                       |
| ---- | ------- | ------------------------------------------------- |
| n    | numeric | The total amount in BGL received for this wallet. |

## Example usage (with RPC call)

The total amount in the wallet with 0 or more confirmations:

```sh 
BGL-cli getbalance
```

The total amount in the wallet with at least 6 confirmations:

```sh 
BGL-cli getbalance "*" 6
```

As a JSON-RPC call:

```sh
curl --user myusername --data-binary '{"jsonrpc": "1.0", "id": "curltest", "method": "getbalance", "params": ["*", 6]}' -H 'content-type: text/plain;' http://127.0.0.1:8334/
```