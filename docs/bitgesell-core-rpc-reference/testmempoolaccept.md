---
sidebar_position: 70
---

# testmempoolaccept

`testmempoolaccept ["rawtx",...] ( maxfeerate )`

Returns result of mempool acceptance tests indicating if raw transaction (serialized, hex-encoded) would be accepted by mempool.

This checks if the transaction violates the consensus or policy rules.

See sendrawtransaction call.

## Argument #1 - rawtxs

**Type:** json array, required

An array of hex strings of raw transactions.

Length must be one for now.

```json
[
"rawtx", (string)
...
]
```

## Argument #2 - maxfeerate

**Type:** numeric or string, optional, default=0.10

Reject transactions whose fee rate is higher than the specified value, expressed in BGL/kB

## Result

```json
[ (json array) The result of the mempool acceptance test for each raw transaction in the input array.
Length is exactly one for now.
{ (json object)
"txid" : "hex", (string) The transaction hash in hex
"allowed" : true|false, (boolean) If the mempool allows this tx to be inserted
"vsize" : n, (numeric) Virtual transaction size as defined in BIP 141. This is different from actual serialized size for witness transactions as witness data is discounted (only present when 'allowed' is true)
"fees" : { (json object) Transaction fees (only present if 'allowed' is true)
"base" : n (numeric) transaction fee in BGL
},
"reject-reason" : "str" (string) Rejection string (only present when 'allowed' is false)
},
...
]
```

## Example usage (with RPC call)

Create a transaction:

```sh
BGL-cli createrawtransaction "[{"txid" : "mytxid","vout":0}]" "{"myaddress":0.01}"
```

Sign the transaction, and get back the hex:

```sh
BGL-cli signrawtransactionwithwallet "myhex"
```

Test acceptance of the transaction (signed hex):

```sh
BGL-cli testmempoolaccept '["signedhex"]'
```

As a JSON-RPC call:

```sh
curl --user myusername --data-binary '{"jsonrpc": "1.0", "id": "curltest", "method": "testmempoolaccept", "params": [["signedhex"]]}' -H 'content-type: text/plain;' http://127.0.0.1:8334/
```
