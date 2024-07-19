---
sidebar_position: 68
---

# sendrawtransaction

`sendrawtransaction "hexstring" ( maxfeerate )`

Submit a raw transaction (serialized, hex-encoded) to local node and network.

Note that the transaction will be sent unconditionally to all peers, so using this for manual rebroadcast may degrade privacy by leaking the transaction’s origin, as nodes will normally not rebroadcast non-wallet transactions already in their mempool.

Also see createrawtransaction and signrawtransactionwithkey calls.

## Argument #1 - hexstring

**Type:** string, required

The hex string of the raw transaction

## Argument #2 - maxfeerate

**Type:** numeric or string, optional, default=0.10

Reject transactions whose fee rate is higher than the specified value, expressed in BGL/kB.

Set to 0 to accept any fee rate.

## Result

| Name | Type   | Description                 |
| ---- | ------ | --------------------------- |
| hex  | string | The transaction hash in hex |

## Example usage (with RPC call)

Create a transaction:

```sh
BGL-cli createrawtransaction "[{"txid" : "mytxid","vout":0}]" "{"myaddress":0.01}"
```
Sign the transaction, and get back the hex:

```sh
BGL-cli signrawtransactionwithwallet "myhex"
````

Send the transaction (signed hex):

```sh
BGL-cli sendrawtransaction "signedhex"
```

As a JSON-RPC call:

```sh
curl --user myusername --data-binary '{"jsonrpc": "1.0", "id": "curltest", "method": "sendrawtransaction", "params": ["signedhex"]}' -H 'content-type: text/plain;' http://127.0.0.1:8334/
```
