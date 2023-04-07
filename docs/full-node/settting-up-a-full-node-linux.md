---
sidebar_position: 2
---

# Setting up a Full Node on Linux

Let's set up a full node on Linux

## 1. Install the latest release

We shall be setting up a full node on **`Ubuntu 20.04`**

1. Download the latest release [here](https://github.com/BitgesellOfficial/bitgesell/releases/download/0.1.9/bitgesell-qt_0.1.9_amd64.deb)

```sh
cd Downloads/
wget https://github.com/BitgesellOfficial/bitgesell/releases/download/0.1.9/bitgesell-qt_0.1.9_amd64.deb
```

2. Update your apt cache

```sh
sudo apt-get update
```

3. Finally install the client,

```sh
chmod +x bitgesell-qt_0.1.9_amd64.deb
sudo dpkg -i bitgesell-qt_0.1.9_amd64.deb
```
