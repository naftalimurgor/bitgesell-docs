---
sidebar_position: 89
---

# getaddressesbylabel

`getaddressesbylabel "label"`

Returns the list of addresses assigned the specified label.

## Argument #1 - label

**Type:** string, required

The label.

## Result

```json
{                         (json object) json object with addresses as keys
  "address" : {           (json object) json object with information about address
    "purpose" : "str"     (string) Purpose of address ("send" for sending address, "receive" for receiving address)
  },
  ...
}
```

## Example usage (with RPC call)

```sh
BGL-cli getaddressesbylabel "tabby"
```

```sh
curl --user myusername --data-binary '{"jsonrpc": "1.0", "id": "curltest", "method": "getaddressesbylabel", "params": ["tabby"]}' -H 'content-type: text/plain;' http://127.0.0.1:8334/
```
