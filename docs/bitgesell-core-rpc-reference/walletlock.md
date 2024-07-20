---
sidebar_position: 135
---
# walletlock

`walletlock`

Removes the wallet encryption key from memory, locking the wallet.

After calling this method, you will need to call walletpassphrase again before being able to call any methods which require the wallet to be unlocked.

## Result

null    (json null)

## Example usage (with RPC call)

Set the passphrase for 2 minutes to perform a transaction:

```sh
BGL-cli walletpassphrase "my pass phrase" 120
```

Perform a send (requires passphrase set):

```sh
BGL-cli sendtoaddress "bc1q09vm5lfy0j5reeulh4x5752q25uqqvz34hufdl" 1.0
```

Clear the passphrase since we are done before 2 minutes is up:

```sh 
BGL-cli walletlock
```

As a JSON-RPC call:

```sh
curl --user myusername --data-binary '{"jsonrpc": "1.0", "id": "curltest", "method": "walletlock", "params": []}' -H 'content-type: text/plain;' http://127.0.0.1:8334/
```