---
sidebar_position: 130
---

# signmessage

`signmessage "address" "message"`

Sign a message with the private key of an address Requires wallet passphrase to be set with walletpassphrase call if wallet is encrypted.

## Argument #1 - address

**Type:** string, required

The bitgesell address to use for the private key.

## Argument #2 - message

**Type:** string, required

The message to create a signature of.

## Result

| Name | Type   | Description                                     |
| ---- | ------ | ----------------------------------------------- |
| str  | string | The signature of the message encoded in base 64 |

## Example usage (with RPC call)

Unlock the wallet for 30 seconds:

```sh
BGL-cli walletpassphrase "mypassphrase" 30
```

Create the signature:

```sh
BGL-cli signmessage "1D1ZrZNe3JUo7ZycKEYQQiQAWd9y54F4XX" "my message"
```

Verify the signature:

```sh
BGL-cli verifymessage "1D1ZrZNe3JUo7ZycKEYQQiQAWd9y54F4XX" "signature" "my message"
```

As a JSON-RPC call:

```sh
curl --user myusername --data-binary '{"jsonrpc": "1.0", "id": "curltest", "method": "signmessage", "params":
["1D1ZrZNe3JUo7ZycKEYQQiQAWd9y54F4XX", "my message"]}' -H 'content-type: text/plain;' http://127.0.0.1:8334/
```
