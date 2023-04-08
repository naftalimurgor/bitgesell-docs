---
sidebar_position: 1
---

# JavaScript SDKs

Learn about sdks written in JavaScript for building on top Bitgesell

## 1. `jsbgl`

A JavaScript library for interracting with Bitgesell library

### Example usage

#### 1. Use in the browser

To use `jsbgl` on the browser:

```javascript
<script src="jsbgl.web.min.js"></script>
<script>
// inside async function
var jsbgl = await jsbgl.asyncInit();
</script>
```

To us on Nodejs:

```sh
npm install jsbgl
# or with yarn
yarn add jsbgl
```

Initialize the sdk:

```javascript
const jsbgl = require('jsbgl')
const jsblglInstance = jsbgl.asyncInit(globalThis)
```

#### 2. Create an address

To create an address:

```javascript
const jsbgl = require('jsbgl')
const jsblglInstance = jsbgl.asyncInit(globalThis)

let a = new globalThis.Address()
console.log(a.address) // 'bgl1qdzjn6rd7e84lt2m5d3yf9jcg42ncdje7vhp4rl'
console.log(a.privateKey.wif) // 'L1LAHLFBWcW2E1xRsUooVL9ajxJXtsAUjJJ4GuPTgHKAKNhy6fsD'
```

#### 3. Create a private key

To create an private key:

```javascript
const jsbgl = require('jsbgl')
const jsblglInstance = jsbgl.asyncInit(globalThis)

let wallet = new Wallet({ path_type: 'BIP84' })
console.log(w.mnemonic) // 'spell scrap legend skin witness inherit gadget resource control replace nothing suspect picnic open letter regret great video voice media bridge walnut parade write'
console.log(w.accountXPublicKey) //'zpub6rz33FnVq7Gk5zwSHFmU2JyS3TTxJcsidBkSYYEirtrrEYiWNoEVWTicx9AQFxBLgYqNjJRSWGmzGcAqYnXSGwBBj66SUDDoZwjMFdR1dCX'
// with seedphrase
let w = new globalThis.Wallet(
  {
    from: 'spell scrap legend skin witness inherit gadget resource control replace nothing suspect picnic open letter regret great video voice media bridge walnut parade write',
  },
  (path_type = 'BIP84')
)
console.log(w.Wallet.accountXPublicKey) // 'zpub6rz33FnVq7Gk5zwSHFmU2JyS3TTxJcsidBkSYYEirtrrEYiWNoEVWTicx9AQFxBLgYqNjJRSWGmzGcAqYnXSGwBBj66SUDDoZwjMFdR1dCX'
console.log(w.getAddress(0).address) // 'bgl1qn54eph87wl54atvctxmvvcqs707lwmw4x8pumc'
console.log(w.getAddress(0).privateKey) // 'L3Rf12jKkYXwv8PTVbfi1JmYQMpe2VKKf94KB4ysrDnN2yFQAn9q'
console.log(w.getAddress(0).publicKey) // '03f8e334ae6dd193eba99220efc8b56e0b9d1a82a4f626c43da4f5a37e630f8e8b'
```

## 2. Bitgesell Wallet
The official web wallet for Bitgesell

Checkout the [implementation](https://github.com/BitgesellOfficial/bitgesell-wallet)

