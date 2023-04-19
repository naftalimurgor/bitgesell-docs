---
sidebar_position: 108
---

# listaddressgroupings

`listaddressgroupings`

Lists groups of addresses which have had their common ownership made public by common use as inputs or as the resulting change in past transactions

## Result

```sh
[               (json array)
  [             (json array)
    [           (json array)
      "str",    (string) The bitgesell address
      n,        (numeric) The amount in BGL
      "str",    (string, optional) The label
      ...
    ],
    ...
  ],
  ...
]
```

## Example usage (with RPC call)

```sh
BGL-cli listaddressgroupings
```

```sh
curl --user myusername --data-binary '{"jsonrpc": "1.0", "id": "curltest", "method": "listaddressgroupings", "params": []}' -H 'content-type: text/plain;' http://127.0.0.1:8334/
```
