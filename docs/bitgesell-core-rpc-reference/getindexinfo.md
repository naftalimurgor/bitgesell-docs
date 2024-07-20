---
sidebar_position: 76
---

# getindexinfo

`getindexinfo ( "index_name" )`

Returns the status of one or all available indices currently running in the node.

## Argument #1 - index\_name

**Type:** string, optional

Filter results for an index with a specific name.

## Result
```json
{                               (json object)
  "name" : {                    (json object) The name of the index
    "synced" : true|false,      (boolean) Whether the index is synced or not
    "best_block_height" : n     (numeric) The block height to which the index is synced
  }
}
```

## Example usage (with RPC call)

```sh 
BGL-cli getindexinfo
```

```sh
curl --user myusername --data-binary '{"jsonrpc": "1.0", "id": "curltest", "method": "getindexinfo", "params": []}' -H 'content-type: text/plain;' http://127.0.0.1:8334/
```

```sh 
BGL-cli getindexinfo txindex
```

curl --user myusername --data-binary '{"jsonrpc": "1.0", "id": "curltest", "method": "getindexinfo", "params": [txindex]}' -H 'content-type: text/plain;' http://127.0.0.1:8334/