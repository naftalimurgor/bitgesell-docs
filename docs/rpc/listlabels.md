---
sidebar_position: 109
---

# listlabels

`listlabels ( "purpose" )`

Returns the list of all labels, or labels that are assigned to addresses with a specific purpose.

## Argument #1 - purpose

**Type:** string, optional

Address purpose to list labels for (‘send’,’receive’). An empty string is the same as not providing this argument.

## Result

```json
[           (json array)
  "str",    (string) Label name
  ...
]
```

## Example usage (with RPC call)

List all labels:

```sh
BGL-cli listlabels
```

List labels that have receiving addresses:

```sh
BGL-cli listlabels receive
```

List labels that have sending addresses:

```sh
BGL-cli listlabels send
```

As a JSON-RPC call:

```sh
curl --user myusername --data-binary '{"jsonrpc": "1.0", "id": "curltest", "method": "listlabels", "params": [receive]}' -H 'content-type: text/plain;' http://127.0.0.1:8334/
```
