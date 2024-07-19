---
sidebar_position: 133
---

# upgradewallet

`upgradewallet ( version )`

Upgrade the wallet. Upgrades to the latest version if no version number is specified.

New keys may be generated and a new wallet backup will need to be made.

## Argument #1 - version

**Type:** numeric, optional, default=169900

The version number to upgrade to. Default is the latest wallet version.

## Result

```json
{ (json object)
"wallet_name" : "str", (string) Name of wallet this operation was performed on
"previous_version" : n, (numeric) Version of wallet before this operation
"current_version" : n, (numeric) Version of wallet after this operation
"result" : "str", (string, optional) Description of result, if no error
"error" : "str" (string, optional) Error message (if there is one)
}
```

## Example usage (with RPC call)

```sh 
BGL-cli upgradewallet 169900
```

```sh
curl --user myusername --data-binary '{"jsonrpc": "1.0", "id": "curltest", "method": "upgradewallet", "params": [169900]}' -H 'content-type: text/plain;' http://127.0.0.1:8334/
```
