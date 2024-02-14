---
sidebar_position: 5
---
BGLd for Docker on Linux
===================

Docker image that runs the Bitgesell bgld node in a container for easy deployment.


Requirements
------------

* Physical machine, cloud instance, or VPS that supports Docker i.e. Vultr, Digital Ocean, KVM or XEN based VMs) running Ubuntu 18.04 or later

* At least 10 GB to store the block chain files (and always growing!)
* At least 500 MB + 1 GB swap file

Really Fast Quick Start
-----------------------

One liner for Ubuntu 20.04 LTS machines with JSON-RPC enabled on localhost and adds upstart init script:

    curl https://raw.githubusercontent.com/naftalimurgor/bgld-docker/master/bootstrap-host.sh | sh

Quick Start
-----------

1. Run an instance of Bitegesell node as follows:

        docker run -dp 8454:8454 naftalimurgor/bgld

2. Verify that the container is running and bgld node is downloading the blockchain

        $ docker ps
        CONTAINER ID   IMAGE                COMMAND   CREATED         STATUS         PORTS                                                 NAMES
        304e5a74a539   naftalimurgor/bgld   "BGLd"    5 seconds ago   Up 3 seconds   0.0.0.0:8454->8454/tcp, :::8454->8454/tcp, 8455/tcp   naughty_greider

3. You can then access the daemon's output thanks to the [docker logs command]( https://docs.docker.com/reference/commandline/cli/#logs)

        docker logs -f bgld

4. Install optional init scripts for upstart and systemd are in the `init` directory.

Building
========

The image can be built from source by running:

        docker build . -t bgld

A recommended security practice is to add an additional unprivileged user to run the daemon as on the host. For example, as a privileged user, run this on the host:

        useradd bgld

To build an image which uses this unprivileged user's id and group id, run:

        docker build --build-arg USER_ID=$( id -u bgld ) --build-arg GROUP_ID=$( id -g bgld ) .

Now, when the container is run with the default options, the bgld process will only have the privileges of the bgld user on the host machine. This is especially important for a process such as bgld which runs as a network service exposed to the internet.


# Debugging

## Things to Check

* RAM utilization -- bgld is very hungry and typically needs in excess of 1GB.  A swap file might be necessary.
* Disk utilization -- The bitgesesl blockchain will continue growing and growing and growing.  Then it will grow some more.  At the time of writing, 40GB+ is necessary, bitgesell is relatively small with block size 10x smaller than that of bitcoin.

## Viewing bgld Logs

    docker logs bgld

## Running Bash in Docker Container

*Note:* This container will be run in the same way as the bgld node, but will not connect to already running containers or processes.

    docker run -dp 8454:8454 naftalimurgor/bgld

You can also attach bash into running container to debug running bgld

    docker exec -it bgld bash -l
