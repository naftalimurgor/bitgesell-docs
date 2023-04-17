---
sidebar_position: 6
---

# `getblockheader`

Returns hex-encoded data for blockheader hash

## `getblockheader` `"blockhash ( verbose )"`

If verbose is `false`, returns a string that is serialized, hex-encoded data for blockheader 'hash'.

If verbose is `true`, returns an Object with information about blockheader 'hash'.

## Usage
```sh
BGL-cli getblockheader [true]
```

### Result(for verbose = `true`)

```javascript
{                                 (json object)
  "hash" : "hex",                 (string) the block hash (same as provided)
  "confirmations" : n,            (numeric) The number of confirmations, or -1 if the block is not on the main chain
  "height" : n,                   (numeric) The block height or index
  "version" : n,                  (numeric) The block version
  "versionHex" : "hex",           (string) The block version formatted in hexadecimal
  "merkleroot" : "hex",           (string) The merkle root
  "time" : xxx,                   (numeric) The block time expressed in UNIX epoch time
  "mediantime" : xxx,             (numeric) The median block time expressed in UNIX epoch time
  "nonce" : n,                    (numeric) The nonce
  "bits" : "hex",                 (string) The bits
  "difficulty" : n,               (numeric) The difficulty
  "chainwork" : "hex",            (string) Expected number of hashes required to produce the current chain
  "nTx" : n,                      (numeric) The number of transactions in the block
  "previousblockhash" : "hex",    (string) The hash of the previous block
  "nextblockhash" : "hex"         (string) The hash of the next block
}

```

### Examples
