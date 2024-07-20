---
sidebar_position: 127
---
# setlabel

`setlabel "address" "label"`

Sets the label associated with the given address.

## Argument #1 - address

**Type:** string, required

The bitgesell address to be associated with a label.

## Argument #2 - label

**Type:** string, required

The label to assign to the address.

## Result

null    (json null)

## Example usage (with RPC call)

```sh
BGL-cli setlabel "bg1q09vm5lfy0j5reeulh4x5752q25uqqvz34hufdl" "tabby"
```

```sh
curl --user myusername --data-binary '{"jsonrpc": "1.0", "id": "curltest", "method": "setlabel", "params": ["bg1q09vm5lfy0j5reeulh4x5752q25uqqvz34hufdl", "tabby"]}' -H 'content-type: text/plain;' http://127.0.0.1:8334/
```