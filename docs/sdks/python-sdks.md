---
sidebar_position: 2
---

# Python SDKs

Learn about sdks written in Python for building on top Bitgesell

## 1. BGLAPI

BGLAPI can be used as a backend for wallets, block explorers, payment processing and analytical platforms and is currently under development

### Usage

#### 1. Fetching block information

Current implementation can be found here [https://api.bitaps.com/bgl/v1/blockchain](https://api.bitaps.com/bgl/v1/blockchain)

```sh
$ curl --request GET \
>     --url https://api.bitaps.com/bgl/v1/blockchain/block/37258 \
>     --header 'Content-Type: application/json'


{"data": {"height": 37258,
          "hash": "0000000000000a6124e6e73baac0a001767bdcdd2b9c38de3b128fe894886037",
          "header": "AAAAIFujfyl1GmRWL2Zn6UC3T/L6cPEtlq8bnWYEAAAAAAAAyNExW/1GYxdvS3K3wfpg/lQysPFB1aamUZUKUp5w3VL2idNfNHsOGmBuiW8C",
          "version": 536870912,
          "previousBlockHash": "00000000000004669d1baf962df170faf24fb740e967662f56641a75297fa35b",
          "merkleRoot": "52dd709e520a9551a6a6d541f1b03254fe60fac1b7724b6f176346fd5b31d1c8",
          "bits": 437156660,
          "nonce": 1871277664,
          "weight": 3917,
          "size": 1730,
          "strippedSize": 729,
          "amount": 199999987238,
          "target": "0000000000000e7b340000000000000000000000000000000000000000000000",
          "miner": null,
          "medianBlockTime": 1607697176,
          "blockTime": 1607698934,
          "receivedTimestamp": 1607698943,
          "adjustedTimestamp": 1607698934,
          "bitsHex": "1a0e7b34",
          "nonceHex": "6f896e60",
          "versionHex": "20000000",
          "difficulty": 1158528.8464602274,
          "blockDifficulty": 1616360.0919962383,
          "nextBlockHash": "000000000000073e1fe6830068349b9fc84e834e354fdaf83c1b4fb94891548b",
          "estimatedBlockReward": 20000000000,
          "blockReward": 20000000000,
          "blockFeeReward": 1707,
          "confirmations": 1691,
          "transactionsCount": 2,
          "coinbase": "038a910004f689d35f08fabe6d6d000000000000000000000000000000000000000000000000000000000000000001000000000000000800b170d6fad5090f2f4d696e696e672d4475746368322f"},
 "time": 0.0011}
```

#### 2. Fetching transaction information

To fetch transaction information:

```sh
$ curl --request GET \

>     --url https://api.bitaps.com/bgl/v1/blockchain/transaction/b68b508031ceb03130a749d490ce09ac31afb2d5ba8f28d85f5688b799bd5723 \
>     --header 'Content-Type: application/json'

{"data": {"segwit": true,
"rbf": false,
"txId": "998835c72dc30a9169bdc6d7837dd2ed881a13f506a668e9217c448282b30bb1",
"hash": "b68b508031ceb03130a749d490ce09ac31afb2d5ba8f28d85f5688b799bd5723",
"version": 2,
"size": 222,
"vSize": 141,
"bSize": 113,
"lockTime": 0,
"vIn": {"0": {"txId": "eabbd66d5b41e4a60264b87c3905491a9aeac3a8ff7872f48a582b0c8fc79846",
"vOut": 1,
"scriptSig": "",
"sequence": 4294967295,
"txInWitness": ["3044022033fb6bcf12954da53a76226854ca961083b2a45eb47733de4b785633611391cf02200082b37770b5fbef4ffc35fcbe1655ee293608494aebd5e903ffb5b9d0f50a3401", "03f51be54fa8cbb51f16834ba976f8e71653c2700c7af9151f80e8d6475109c848"],
"scriptSigOpcodes": "",
"scriptSigAsm": "",
"type": "P2WPKH",
"amount": 13677157503,
"blockHeight": 37222,
"confirmations": 1725,
"address": "bgl1qt3jeum7dxltsdygtcncgpspny375wwqyvap65y",
"scriptPubKey": "00145c659e6fcd37d706910bc4f080c033247d473804",
"scriptPubKeyOpcodes": "OP_0 [20]",
"scriptPubKeyAsm": "OP_0 OP_PUSHBYTES[20] 5c659e6fcd37d706910bc4f080c033247d473804"}},
"vOut": {"0": {"value": 54350000,
"scriptPubKey": "001437dc0a14a04e3f182da33e01adcdd036642fca5e",
"nType": 5,
"type": "P2WPKH",
"addressHash": "37dc0a14a04e3f182da33e01adcdd036642fca5e",
"reqSigs": 1,
"address": "bgl1qxlwq599qfcl3stdr8cq6mnwsxejzljj7tf8ugc",
"scriptPubKeyOpcodes": "OP_0 [20]",
"scriptPubKeyAsm": "OP_0 OP_PUSHBYTES[20] 37dc0a14a04e3f182da33e01adcdd036642fca5e",
"spent": []},
"1": {"value": 13622807221,
"scriptPubKey": "00145c659e6fcd37d706910bc4f080c033247d473804",
"nType": 5,
"type": "P2WPKH",
"addressHash": "5c659e6fcd37d706910bc4f080c033247d473804",
"reqSigs": 1,
"address": "bgl1qt3jeum7dxltsdygtcncgpspny375wwqyvap65y",
"scriptPubKeyOpcodes": "OP_0 [20]",
"scriptPubKeyAsm": "OP_0 OP_PUSHBYTES[20] 5c659e6fcd37d706910bc4f080c033247d473804",
"spent": []}},
"confirmations": 1707,
"blockHash": "00000000000001e273c2e54c27e947ae74c19df95770074827c8effd84833a07",
"blockHeight": 37240,
"coinbase": false,
"data": null,
 "amount": 13677157221,
"fee": 282,
 "time": 1607689608,
"blockTime": 1607690070,
"blockIndex": 1,
"flag": "01",
"weight": 561,
"merkleProof": "8XO6W6VoG6mhb0pBO6K+zeICkdzBswW6UODI8knWp/w=",
"inputsAmount": 13677157503,
"outputsAmount": 13677157221,
"adjustedTimestamp": 1607690070,
"valid": true,
"feeRate": 2.0},
"time": 0.0038}
```

#### 3. Fetch unspend transactions output for an address (UTXO)

To fetch unspend transaction output:

```sh
$ curl --request GET \
>     --url https://api.bitaps.com/bgl/v1/blockchain/address/utxo/bgl1qt3jeum7dxltsdygtcncgpspny375wwqyvap65y \
>     --header 'Content-Type: application/json'

{"data": [{"txId": "998835c72dc30a9169bdc6d7837dd2ed881a13f506a668e9217c448282b30bb1",
           "vOut": 1,
           "block": 37240,
           "txIndex": 1,
           "amount": 13622807221}],
 "time": 0.0022}
```

You can fork and contribute to this project on 👉 [Github](https://github.com/BitgesellOfficial/bglapiserver)

## 2. Pybgl

`pybgl` is a Python library for Bitgesell.

### 1. Installation

To install `pyblgl`:

```sh
$ git clone https://github.com/bitaps-com/pybgl
$ cd pybgl
$ python3 setup.py install
```

### Example usage

#### 1. Create an address

To create an address:

```python
  >>> import pybgl
  >>> a = pybgl.Address()
  >>> a.address
  'bgl1qdzjn6rd7e84lt2m5d3yf9jcg42ncdje7vhp4rl'
  >>> a.private_key.wif
  'L1LAHLFBWcW2E1xRsUooVL9ajxJXtsAUjJJ4GuPTgHKAKNhy6fsD'
  >>> a = pybgl.Address('L1LAHLFBWcW2E1xRsUooVL9ajxJXtsAUjJJ4GuPTgHKAKNhy6fsD')
  >>> a.address
  'bgl1qdzjn6rd7e84lt2m5d3yf9jcg42ncdje7vhp4rl'
```

#### 2. Create a private key

To create a private key:s

```python
  >>> import pybgl
  >>> pybgl.create_private_key()
  'L38PPqhzCbyTH3nd7e2ExEY3LSdaYhaF1d7pXYBEz83avPfpBbZ6'
  >>> pybgl.create_private_key(compressed=False)
  '5JCnJEggRKX5rscdGiqasmYdsyQ2fCYyLA7xYqSDRLEbWY7mZtq'
```

#### 3. Create a wallet

To create a wallet:

```python
  >>> import pybgl
  >>> pybgl.create_private_key()
  'L38PPqhzCbyTH3nd7e2ExEY3LSdaYhaF1d7pXYBEz83avPfpBbZ6'
  >>> pybgl.create_private_key(compressed=False)
  '5JCnJEggRKX5rscdGiqasmYdsyQ2fCYyLA7xYqSDRLEbWY7mZtq'
```
You can fork and contribute to this project on 👉 [Github](https://github.com/BitgesellOfficial/pybgl)

Read more in the [docs](https://pybgl.readthedocs.io/)