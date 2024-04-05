# Handling a validator
Once you've properly set up a [validator node](validator-node-installation.md), it must be subject to certain rules and certain operations must be carried out to manage it.



- [Handling a validator](#handling-a-validator)
  - [Downtime rules](#downtime-rules)
  - [Double sign rules](#double-sign-rules)
  - [Unjail procedure](#unjail-procedure)
  - [Unbond procedure](#unbond-procedure)
  - [Redelegate procedure](#redelegate-procedure)
  - [Move node to other server](#move-node-to-other-server)
    - [Move validator to another server with `priv_validator_key.json` file](#move-validator-to-another-server-with-priv_validator_keyjson-file)
    - [Move validator to another server with `kms`](#move-validator-to-another-server-with-kms)
    - [Resume validator after break down with `priv_validator_key.json` file](#resume-validator-after-break-down-with-priv_validator_keyjson-file)
    - [Resume validator after break down with `kms`](#resume-validator-after-break-down-with-kms)
  - [x% Loss of blocks](#x-loss-of-blocks)
  - [Disk consumption growth](#disk-consumption-growth)
    - [Add a new disk to the node](#add-a-new-disk-to-the-node)
    - [Increase disk space](#increase-disk-space)
    - [Split the content of `data` folder](#split-the-content-of-data-folder)
    - [Prune the node](#prune-the-node)
    - [State sync the node](#state-sync-the-node)
  - [Add identity to your validator](#add-identity-to-your-validator)
    - [References keybase](#references-keybase)
    - [1. Registration](#1-registration)
    - [2. Adding one or more devices](#2-adding-one-or-more-devices)
      - [2.1. Program installation on computers](#21-program-installation-on-computers)
      - [2.2. App installation on iPhone and Android](#22-app-installation-on-iphone-and-android)
    - [3. Verify email](#3-verify-email)
    - [4. Add logo and key](#4-add-logo-and-key)
    - [5. Edit your validator adding identity](#5-edit-your-validator-adding-identity)

## Downtime rules
The node can only stay offline for a certain amount of time.   
In the case of **Commercio Network** this period has been fixed at 19,000 blocks lost, approximately corresponding to 27/28 hours.   
Validator must validate at least 5% of a window of 20000 blocks, i.e. 19000 blocks.    
If the node remains offline or fails to produce blocks for a period longer than the limit, it will incur slashing, i.e. an immediate loss of a certain amount of the staked tokens and the exit from the active validator set    
**For "Commercio Network" the slashing percentage for downtime is set at `1%`.**     

## Double sign rules
A validator node must be unique on the chain, so only a node can sign with that private key.   
If there was another node with the same private key, this would result in a double signature, and therefore an immediate jail entry of the node with no exit possibility.   
**For "Commercio Network" the slashing percentage for double sing is set at `5%`.**       
If you run into double signatures all tokens must be unbond and you must create a new validator node with new private keys.    

:::warning
The unbond period is 21 days, so is necessary to wait this period to get back in possession of your tokens.     
:::

## Unjail procedure
In case a validator ended up jail for downtime, it is necessary that the wallet that created the validator performs a ujail transaction.   
The follow command must be performed 

```bash
commercionetworkd tx slashing \
  unjail \
  --from <your pub addr creator val> \
  --fees=10000ucommercio  \
  --chain-id="$CHAINID" \
  -y
```
**Note**: You can use `uccc` tokens instead `ucommercio` for the `fees` value

If you are using the **Ledger device** you must first connect it to your computer, start the cosmos application and add `--ledger` flag to the command.


## Unbond procedure
Tokens can be delegated to any validator to increase its stake.      
In case you want to remove all or part of the delegated tokens, an `unbond transaction` must be performed.   
The undelegated period is **21 days**, so is necessary to wait this period to get back in possession of your tokens.     
To perform `unbond transaction` use the follow command

```bash
commercionetworkd tx staking \
  unbond \
  <validator-operator-addr> \
  50000000000ucommercio \
  --from <your pub addr delegator> \
  --fees=10000ucommercio  \
  --chain-id="$CHAINID" \
  -y
```

**Note**: You can use `uccc` tokens instead `ucommercio` for the `fees` value


value of `<validator-operator-addr>` can be obtain from explorer:


[Commercio.network explorer Testnet](https://testnet.commercio.network/it/validators).       
[Commercio.network explorer Mainnet](https://mainnet.commercio.network/it/validators).       


If you see your validator in the list click on its name.     
The validator tab should have the value **Operator**. That value is your `<validator-operator-addr>`     
      
If you are using the **Ledger device** you must first connect it to your computer, start the cosmos application and add `--ledger` flag to the command.


## Redelegate procedure
It is possible to perform a procedure of moving tokens in stake from one validator to another through the `redelegate transaction`.     
To perform `redelegate transaction` use the follow command

```bash
commercionetworkd tx staking \
  redelegate \
  <source-validator-operator-addr> \
  <destination-validator-operator-addr> \
  50000000000ucommercio \
  --from <your pub addr delegator> \
  --fees=10000ucommercio \
  --chain-id="$CHAINID" \
  -y
```

**Note**: You can use `uccc` tokens instead `ucommercio` for the `fees` value


value of `<source-validator-operator-addr>` and `<destination-validator-operator-addr>` can be obtains from explorer:


[Commercio.network explorer Testnet](https://testnet.commercio.network/it/validators).       
[Commercio.network explorer Mainnet](https://mainnet.commercio.network/it/validators).       


Search your source validator in the list, i.e. the validator you want to move the tokens from, and click on its name.     
The validator tab should have the value **Operator**. That value is your `<source-validator-operator-addr>`     
Return to the list of validators and search your destination validator, i.e. the validator you want to move the tokens to, and click on its name.   
The validator tab should have the value **Operator**. That value is your `<destination-validator-operator-addr>`     



If you are using the **Ledger device** you must first connect it to your computer, start the cosmos application and add `--ledger` flag to the command.


## Move node to other server

If you need to move your validator to another server, the only thing that you need to move is your private key.     
Your node structure should be something like below

```bash
.commercionetwork
├── config
│   └── app.toml
│   └── config.toml
│   └── genesis.json
│   └── node_key.json
│   └── priv_validator_key.json
├── data
│   └── priv_validator_state.json
└── cosmovisor
    └── current -> /path/to/the/current/version/of/commercionetworkd
    └── genesis
    │   └── bin
    │      └── commercionetworkd
    └── upgrades
        └── <name>
           └── bin
               └── commercionetworkd

```
If you don't use `kms` the private key of your validator is saved in `priv_validator_key.json` file.     

### Move validator to another server with `priv_validator_key.json` file

1. Install a full node in the new server
2. Stop the full node `commercionetworkd` service in the **new server** 
   ```bash
   systemctl stop commercionetworkd
   ```
3. Copy `data` folder to the new server
   ```bash
   rsync -av --delete \
     ~/.commercionetwork/data/ \
     <USER_NEW_SERVER>@<IP_NEW_SERVER>:.commercionetwork/data/
   ```
4. Stop and disable the `commercionetworkd` service in the **current (old) server** of validator node
   ```bash
   systemctl stop commercionetworkd
   systemctl disable commercionetworkd
   ```
1. Sync again your new node `data` folder
   ```bash
   rsync -av --delete \
     ~/.commercionetwork/data/ \
     <USER_NEW_SERVER>@<IP_NEW_SERVER>:.commercionetwork/data/
   ```
2. Copy your `priv_validator_key.json` in the **new server**
   ```bash
   scp ~/.commercionetwork/config/priv_validator_key.json \
     <USER_NEW_SERVER>@<IP_NEW_SERVER>:.commercionetwork/config/priv_validator_key.json
   ```
3. If you have some special setup in your `config.toml` and `app.toml` copy that in your new node.
4. Remove the `priv_validator_key.json` file from **old server**
   ```bash
   rm ~/.commercionetwork/config/priv_validator_key.json
   ```
1. Restart the node in your new server
   ```bash
   systemctl start commercionetworkd
   ```
1. Verify if your validator signs again checking the explorer



### Move validator to another server with `kms`

1. Install a full node in the new server
2. Stop the full node `commercionetworkd` service in the new server 
   ```bash
   systemctl stop commercionetworkd
   ```
3. Copy `data` folder to the new server
   ```bash
   rsync -av --delete  \
     ~/.commercionetwork/data/ \
     <USER_NEW_SERVER>@<IP_NEW_SERVER>:.commercionetwork/data/
   ```
4. If you have some special setup in your `config.toml` and `app.toml` copy that in your new node. Especially setup your `priv_val_addr` in `config.toml` using the setup of your server. 
5. Enter in your `kms` server and stop the `tmkms` service
   ```bash
   systemctl stop tmkms
   ```
6. Modify `tmkms` config using `priv_val_addr` value of your validator 
   ```toml
   [[validator]]
   addr = "tcp://<VALIDATOR_IP>:26658"
   ``` 
7. Restart `tmkms` service
   ```bash
   systemctl start tmkms
   ```
8. Restart the node in your new server
   ```bash
   systemctl start commercionetworkd
   ```
9. Verify if your validator signs again checking the explorer
   

### Resume validator after break down with `priv_validator_key.json` file

To resume a validator after break down or some other terrible issue that destroy your server you need to have the `priv_validator_key.json` saved in a secure place.

1. Install a full node in the new server
2. After the node is synced with the chain stop it
   ```bash
   systemctl stop commercionetworkd
   ```
3. Copy your saved `priv_validator_key.json` file in the new server in `~/.commercionetwork/config/` folder
4. Restart the node in your new server
   ```bash
   systemctl start commercionetworkd
   ```
5. Verify if your validator signs again checking the explorer

### Resume validator after break down with `kms`
1. Install a full node in the new server
2. After the node is synced with the chain stop it
   ```bash
   systemctl stop commercionetworkd
   ```
1. Setup your `priv_val_addr` in `config.toml` using the setup of your server. 
1. Enter in your `kms` server and stop the `tmkms` service
   ```bash
   systemctl stop tmkms
   ```
1. Modify `tmkms` config using `priv_val_addr` value of your validator 
   ```toml
   [[validator]]
   addr = "tcp://<VALIDATOR_IP>:26658"
   ``` 
1. Restart `tmkms` service
   ```bash
   systemctl start tmkms
   ```
1. Restart the node in your new server
   ```bash
   systemctl start commercionetworkd
   ```
1. Verify if your validator signs again checking the explorer

## x% Loss of blocks

 What does an x% loss of blocks mean for a validator? 

 In order to create blocks and extend the blockchain, active validators are selected in proportion to their stake by a pseudo-random mechanism that assigns at a time t a proposer (block proposer) and a fixed pool of validators (committee). The block proposer is assigned the task of proposing the block Bt (block at time t) while the committee is given the task of voting whether the block is hung on the chain or not.

 Losing a block for a validator means that this validator was inactive at the time of the committee's choice or that it did not vote towards the execution of the block. Thus, having a validator with an x% loss of blocks means that the validator is only active (100 - x)% of the time when the Bt block is assigned.

## Disk consumption growth

The disk consumption of a node is mainly due to the storage of the blockchain and the state of the application. The blockchain is the sequence of blocks that are created over time and that are linked together by the hash of the previous block. The state of the application is the set of all the data that the application stores in the blockchain. The state of the application is stored in the `data` folder of the node.     
Time after time the space occupied by the blockchain and the state of the application increases, and you need to increase the disk space of the node or reduce the space occupied by the blockchain and the state of the application. 


### Add a new disk to the node

The node can be configured to use a new disk to store the blockchain and the state of the application. You need to transfer the `data` folder of the node to the new disk, and after linking the new folder to the `data` folder of the node. The following steps must be performed to add a new disk to the node:

1. Create a new disk in the vm provider (depending on the vm provider)
2. Mount the new disk in the node
   ```bash
   sudo su -
   mkdir /mnt/data
   mount /dev/sdb /mnt/data
   ```
3. Transfer the `data` folder of the node to the new disk
   ```bash
   rsync -av --delete \
     ~/.commercionetwork/data/ \
     /mnt/data/
   ```
4. Stop the node service and finalize the transfer of the `data` folder of the node to the new disk
   ```bash
   systemctl stop commercionetworkd
   rsync -av --delete \
     ~/.commercionetwork/data/ \
     /mnt/data/
   ```
5. Link the new `data` folder to the `data` folder of the node
   ```bash
   cd ~/.commercionetwork
   mv data data_old
   ln -s /mnt/data data
   ```
6. Restart the node service
   ```bash
   systemctl start commercionetworkd
   ```
7. Verify if the node is working
   ```bash
   journalctl -u commercionetworkd -f
   ```
8. Remove the old `data` folder
   ```bash
   rm -rf ~/.commercionetwork/data_old
   ```

### Increase disk space

The vm provider allows you to increase the disk space of the node. The following steps must be performed to increase the disk space of the node (depending on the vm provider. **Based on DigitalOcean Provider**):

1. Increase the disk space of the node from the vm provider console
2. Enter in the node and stop the node service
   ```bash
   systemctl stop commercionetworkd
   ```
3. Check the mount point of the disk
   ```bash
   df -h
   ```
   Output example:
   ```bash
   filesystem      size  used  avail  use%  mounted on
   /dev/sda        25G   5G    20G    20%   /
   /dev/sdb        25G   5G    20G    20%   /mnt/data
   ```
   Get the mount point of the disk. In this example the mount point is `/dev/sdb`
3. Umount the disk
   ```bash
   sudo su -
   umount /mnt/data
   ```
4. Resize the disk
   ```bash
   sudo su -
   e2fsck -f /dev/sdb
   resize2fs /dev/sdb
   ```
5. Mount the disk
   ```bash
   sudo su -
   mount /dev/sdb /mnt/data
   ```
6. Check the size of the disk
   ```bash
   df -h
   ```
7. Restart the node service
   ```bash
   systemctl start commercionetworkd
   ```
8. Verify if the node is working
   ```bash
   journalctl -u commercionetworkd -f
   ```

### Split the content of `data` folder

The blockchain and the state of the application can be split into different folders. The following steps must be performed to split the blockchain and the state of the application into different folders:

1. Add a new disk to the node
2. Check the mount point of the disk
   ```bash
   df -h
   ```
   Output example:
   ```bash
   filesystem      size  used  avail  use%  mounted on
   /dev/sda        25G   5G    20G    20%   /
   /dev/sdb        25G   5G    20G    20%   /mnt/data
   ```
   Get the mount point of the disk. In this example the mount point is `/dev/sdb`
3. Select a sub-folder of `data` to move to the new disk. In this example the sub-folder is `data/application.db`
4. Transfer the sub-folder to the new disk
   ```bash
   rsync -av --delete \
     ~/.commercionetwork/data/application.db/ \
     /mnt/data/application.db/
   ```
5. Stop the node service and finalize the transfer of the sub-folder to the new disk
   ```bash
   systemctl stop commercionetworkd
   rsync -av --delete \
     ~/.commercionetwork/data/application.db/ \
     /mnt/data/application.db/
   ```
6. Link the new sub-folder to the `data` folder of the node
   ```bash
   cd ~/.commercionetwork/data
   mv application.db application.db_old
   ln -s /mnt/data/application.db application.db
   ```
7. Restart the node service
   ```bash
   systemctl start commercionetworkd
   ```
8. Verify if the node is working
   ```bash
   journalctl -u commercionetworkd -f
   ```
9. Remove the old sub-folder
   ```bash
   rm -rf ~/.commercionetwork/data/application.db_old
   ```
10. Repeat the steps from 3 to 9 for each sub-folder of `data` you want to move to the new disk


### Prune the node

The blockchain and the state of the application can be reduced by pruning the node. Pruning is the process of removing old blocks from the blockchain and the state of the application. The pruning process is performed automatically by the node. The default pruning process can be changed by setting the `pruning` parameter in the `~/.commercionetwork/config/config.toml` file. The default value is `default` and it is possible to set the value to `everything`, `nothing` or `custom`.      
To increase the pruning process it is possible to set the `pruning` parameter in the `config.toml` file to `everything`. The pruning setting can be applied restarting the node service.

You can apply pruning **manually** once in a while with the follow procedure.

:::warning
Please note that the following commands assume you are acting as the root user. Adjust the user and file paths accordingly if your node is using a different user.
:::

1. Stop `commercionetworkd`
   ```bash
   systemctl stop commercionetworkd
   ```

2. Prune the node
   ```bash
   /root/.commercionetwork/cosmovisor/current/bin/commercionetworkd \
     forceprune -f 282000 -m 1000 --home /root/.commercionetwork
   ```

3. Start the node
   ```bash
   systemctl start commercionetworkd
   ```


### State sync the node

The blockchain and the state of the application can be reduced by state syncing the node. State syncing is the process of downloading the state of the application from a trusted node.
Read more about state syncing [here](https://docs.tendermint.com/v0.34/tendermint-core/state-sync.html).    
If you're looking for how to install a statesynced node follow the instructions [here](statesync-node-installation.md).

In this guide, we will walk you through the process of reducing the disk usage of your Commercio Network node by state syncing it to the blockchain. 

:::warning
Please note that the following commands assume you are acting as the root user. Adjust the user and file paths accordingly if your node is using a different user.
:::

1. Prepare the setup for the statesync
   ```bash
   TRUST_RPC1="rpc-mainnet.commercio.network:80"
   TRUST_RPC2="rpc2-mainnet.commercio.network:80"

   # Get the current height of the blockchain.
   CURR_HEIGHT=$(curl -s "http://$TRUST_RPC1/block" | jq -r '.result.block.header.height')

   # Calculate the trust height.
   TRUST_HEIGHT=$((CURR_HEIGHT-(CURR_HEIGHT%10000)))

   # Get the trust hash.
   TRUST_HASH=$(curl -s "http://$TRUST_RPC1/block?height=$TRUST_HEIGHT" | jq -r '.result.block_id.hash')
   ```

2. Verify the output
   ```bash
   printf "rpc_servers = \"$TRUST_RPC1,$TRUST_RPC2\"\ntrust_height = $TRUST_HEIGHT\ntrust_hash = \"$TRUST_HASH\"\n"
   ```

   The output should be similar to the following:
   ```toml
   rpc_servers = "rpc-mainnet.commercio.network:80,rpc2-mainnet.commercio.network:80"
   trust_height = 10520000
   trust_hash = "2A3B7444CD097C556FD1D1AA4D259E99E9F7513041C02EF3B7DCF8F39FFA21F8"
   ```

3. Write the parameters in the config file
   ```bash
   sed -i -e "s/enable = .*/enable = true/" /root/.commercionetwork/config/config.toml
   sed -i -e "s/rpc_servers = \".*\"/rpc_servers = \"$TRUST_RPC1,$TRUST_RPC2\"/" /root/.commercionetwork/config/config.toml
   sed -i -e "s/trust_height = .*/trust_height = $TRUST_HEIGHT/" /root/.commercionetwork/config/config.toml
   sed -i -e "s/trust_hash = \".*\"/trust_hash = \"$TRUST_HASH\"/" /root/.commercionetwork/config/config.toml
   sed -i -e "s/trust_period = \".*\"/trust_period = \"168h0m0s\"/" /root/.commercionetwork/config/config.toml
   ```

4. Stop the `commercionetworkd` process
   ```bash
   systemctl stop commercionetworkd
   ```

5. Backup state file
   ```bash
   cp /root/.commercionetwork/data/priv_validator_state.json \
     /root/.commercionetwork/priv_validator_state.json.backup
   ```

6. Reset node database
   ```bash
   commercionetworkd unsafe-reset-all \
     --home /root/.commercionetwork --keep-addr-book
   ```

7. Copy back the backupped state file
   ```bash
   cp /root/.commercionetwork/priv_validator_state.json.backup \
     /root/.commercionetwork/data/priv_validator_state.json
   ```

8. **If you're not operating with root** change the permission accordingly
   ```bash
   chown -R [USER]:[USER] /home/[USER]/.commercionetwork/
   ```

9. Start the node
   ```bash
   systemctl start commercionetworkd
   ```

10. Check the node alignment
      ```bash
      journalctl -u commercionetworkd -f | grep height=
      ```

11. Clean up operations
      ```bash
      rm /root/.commercionetwork/priv_validator_state.json.backup
      ```


## Add identity to your validator

In order to publish the validator icon to any explorer, an identity must be created at [keybase](https://keybase.io).
Below are the steps to be performed 



### References keybase

- [Keybase book](https://book.keybase.io/account)
- [Keybase API](https://keybase.io/docs/api/1.0/intro)

### 1. Registration

In the [Keybase.io](https://keybase.io/) site click on `Login`; a popup opens where there is a `Join Keybase` button. After pressing this button fill in the form fields and submit the request.

### 2. Adding one or more devices


Install Keybase on a device, start the program and authenticate with the credentials entered during registration. The application displays a prompt to add the device in use.

#### 2.1. Program installation on computers

- [macOS](https://keybase.io/docs/the_app/install_macos)
- [Linux](https://keybase.io/docs/the_app/install_linux)
- [Windows](https://keybase.io/docs/the_app/install_windows)

#### 2.2. App installation on iPhone and Android

- [iPhone/iPad](https://apps.apple.com/us/app/keybase-crypto-for-everyone/id1044461770)
- [Android](https://play.google.com/store/apps/details?id=io.keybase.ossifrage&referrer=undefined)

### 3. Verify email

After authenticating, request verification of the email address.

### 4. Add logo and key

In the `people` section of the program, click on the `Edit Profile` button to complete the profile (data and image) and to access the proof list.

From the proof list, select `Add a PGP key`, then add a locally generated PGP public key or create a new one with the `Get a new PGP key` function provided by the application. Generation via the Keybase application is done automatically, the only actions required are:

- Fill out the form (`full name` and `email`);
- At the end of generation decide to save or not to Keybase the private key by encrypting it.

After adding the key you will be able to access your account image using the `https://keybase.io/_/api/1.0/user/lookup.json?key_suffix=[id]&fields=pictures` endpoint, where `[id]` consists of the first 16 hexadecimal digits of the PGP key.

### 5. Edit your validator adding identity

In order to add the identity to your validator you need to edit the validator profile with a transaction.      
**Warning: put the values of `moniker`, `website` and `details` according with your environment**

```bash
IDENTITY="[id]" #ID that you obtained in the previous step. Something like 21C53B7B20C1145D
commercionetworkd tx staking edit-validator \
  --moniker="$NODENAME" \
  --identity="$IDENTITY" \
  --website="your website (leave blank if you don't have it)" \
  --details="description of your node (leave blank if you don't have it)" \
  --chain-id="commercio-3" \
  --from=<CREATOR ADDRESS> \
  --fees=10000ucommercio \
  -y
```


*N.B.: after editing the profile the `Edit Profile` button will disappear, in its place will be the `Prove your identies` button until the identity is proven*

