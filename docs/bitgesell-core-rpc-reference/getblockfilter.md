---
sidebar_position: 5
---
# `getblockfilter`
Retrieve a BIP 157 content filter for a particular block.

## Argument#1 - blockhash

**`Type`**: string, required

Returns: the hash of the block

## Argument#2 - filterType

Type: string, optional, default=basic

The type name of the filter.

### Result

```sh
{                      (json object)
  "filter" : "hex",    (string) the hex-encoded filter data
  "header" : "hex"     (string) the hex-encoded filter header
}
```

## Example usage (with RPC call)

```sh
BGL-cli getblockfilter "0000000000000195be3ee2b37e88f07919265da7eb2ff0f625cd45511c9eb48c"
```

```sh
curl --user myusername --data-binary '{"jsonrpc": "1.0", "id": "curltest", "method": "getblockfilter", "params": ["0000000000000195be3ee2b37e88f07919265da7eb2ff0f625cd45511c9eb48c", "basic"]}' -H 'content-type: text/plain;' http://127.0.0.1:8334j/
```