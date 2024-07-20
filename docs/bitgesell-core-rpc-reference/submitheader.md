---
sidebar_position: 41
---

# submitheader

`submitheader "hexdata"`

Decode the given hexdata as a header and submit it as a candidate chain tip if valid.

Throws when the header is invalid.

## Argument #1 - hexdata

**Type:** string, required

the hex-encoded block header data

## Result

| Name | Type      | Description |
| ---- | --------- | ----------- |
| null | json null | None        |

## Example usage (with RPC call)

```sh
BGL-cli submitheader "aabbcc"
```

```sh
curl --user myusername --data-binary '{"jsonrpc": "1.0", "id": "curltest", "method": "submitheader", "params": ["aabbcc"]}' -H 'content-type: text/plain;' http://127.0.0.1:8334/
```
