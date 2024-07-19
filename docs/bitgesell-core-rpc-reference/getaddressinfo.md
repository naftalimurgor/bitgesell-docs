---
sidebar_position: 90
---

# getaddressinfo


`getaddressinfo "address"`

Return information about the given bitgesell address.

Some of the information will only be present if the address is in the active wallet.

## Argument #1 - address

**Type:** string, required

The bitgesell address for which to get information.

## Result

```json
{                                   (json object)
  "address" : "str",                (string) The bitgesell address validated.
  "scriptPubKey" : "hex",           (string) The hex-encoded scriptPubKey generated by the address.
  "ismine" : true|false,            (boolean) If the address is yours.
  "iswatchonly" : true|false,       (boolean) If the address is watchonly.
  "solvable" : true|false,          (boolean) If we know how to spend coins sent to this address, ignoring the possible lack of private keys.
  "desc" : "str",                   (string, optional) A descriptor for spending coins sent to this address (only when solvable).
  "isscript" : true|false,          (boolean) If the key is a script.
  "ischange" : true|false,          (boolean) If the address was used for change output.
  "iswitness" : true|false,         (boolean) If the address is a witness address.
  "witness_version" : n,            (numeric, optional) The version number of the witness program.
  "witness_program" : "hex",        (string, optional) The hex value of the witness program.
  "script" : "str",                 (string, optional) The output script type. Only if isscript is true and the redeemscript is known. Possible
                                    types: nonstandard, pubkey, pubkeyhash, scripthash, multisig, nulldata, witness_v0_keyhash,
                                    witness_v0_scripthash, witness_unknown.
  "hex" : "hex",                    (string, optional) The redeemscript for the p2sh address.
  "pubkeys" : [                     (json array, optional) Array of pubkeys associated with the known redeemscript (only if script is multisig).
    "str",                          (string)
    ...
  ],
  "sigsrequired" : n,               (numeric, optional) The number of signatures required to spend multisig output (only if script is multisig).
  "pubkey" : "hex",                 (string, optional) The hex value of the raw public key for single-key addresses (possibly embedded in P2SH or P2WSH).
  "embedded" : {                    (json object, optional) Information about the address embedded in P2SH or P2WSH, if relevant and known.
    ...                             Includes all getaddressinfo output fields for the embedded address, excluding metadata (timestamp, hdkeypath, hdseedid)
                                    and relation to the wallet (ismine, iswatchonly).
  },
  "iscompressed" : true|false,      (boolean, optional) If the pubkey is compressed.
  "timestamp" : xxx,                (numeric, optional) The creation time of the key, if available, expressed in UNIX epoch time.
  "hdkeypath" : "str",              (string, optional) The HD keypath, if the key is HD and available.
  "hdseedid" : "hex",               (string, optional) The Hash160 of the HD seed.
  "hdmasterfingerprint" : "hex",    (string, optional) The fingerprint of the master key.
  "labels" : [                      (json array) Array of labels associated with the address. Currently limited to one label but returned
                                    as an array to keep the API stable if multiple labels are enabled in the future.
    "str",                          (string) Label name (defaults to "").
    ...
  ]
}
```

## Example usage (with RPC call)

```sh
BGL-cli getaddressinfo "bg1q09vm5lfy0j5reeulh4x5752q25uqqvz34hufdl"
```
```sh
curl --user myusername --data-binary '{"jsonrpc": "1.0", "id": "curltest", "method": "getaddressinfo", "params": ["bg1q09vm5lfy0j5reeulh4x5752q25uqqvz34hufdl"]}' -H 'content-type: text/plain;' http://127.0.0.1:8334/
```