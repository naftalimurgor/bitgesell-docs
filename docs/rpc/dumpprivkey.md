---
sidebar_position: 86
---

# dumpprivkey

`dumpprivkey "address"`

Reveals the private key corresponding to ‘address’.

Then the importprivkey can be used with this output

## Argument #1 - address

**Type:** string, required

The bitgesell address for the private key

## Result

| Name | Type   | Description     |
| ---- | ------ | --------------- |
| str  | string | The private key |

## Example usage (with RPC call)

````sh 
BGL-cli dumpprivkey "myaddress"
```
```sh
BGL-cli importprivkey "mykey"
````

```sh
curl --user myusername --data-binary '{"jsonrpc": "1.0", "id": "curltest", "method": "dumpprivkey", "params": ["myaddress"]}' -H 'content-type: text/plain;' http://127.0.0.1:8334/
```
