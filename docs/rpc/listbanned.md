---
sidebar_position: 51
---

# listbanned

`listbanned`

List all manually banned IPs/Subnets.

## Result

```json
[
  {
  "address": `<address>`,             (string) The banned address.
  "banned_until": `<time>`,           (numeric) The time (in seconds since Jan 1 1970 GMT) until the address is banned.
  "ban_created": `<time>`,            (numeric) The time (in seconds since Jan 1 1970 GMT) when the ban was created.
  }
]
```

## Example usage (with RPC call)

```sh 
BGL-cli listbanned
```

```sh
curl --user myusername --data-binary '{"jsonrpc": "1.0", "id": "curltest", "method": "listbanned", "params": []}' -H 'content-type: text/plain;' http://127.0.0.1:8334/
```