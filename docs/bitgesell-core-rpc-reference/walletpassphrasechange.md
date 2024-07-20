---
sidebar_position: 137
---

# walletpassphrasechange

`walletpassphrasechange "oldpassphrase" "newpassphrase"`

Changes the wallet passphrase from ‘oldpassphrase’ to ‘newpassphrase’.

## Argument #1 - oldpassphrase

**Type:** string, required

The current passphrase

## Argument #2 - newpassphrase

**Type:** string, required

The new passphrase

## Result

null (json null)

## Example usage (with RPC call)

```sh
BGL-cli walletpassphrasechange "old one" "new one"
```

```sh
curl --user myusername --data-binary '{"jsonrpc": "1.0", "id": "curltest", "method": "walletpassphrasechange", "params": ["old one", "new one"]}' -H 'content-type: text/plain;' http://127.0.0.1:8334/
```
