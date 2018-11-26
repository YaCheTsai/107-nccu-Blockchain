First you need nodejs and Ganache blockchain

Solc is a compiler for solidity 
installation : npm install -g solc

Then you have to comply your Smart Contract.
solcjs -o ./contract --bin --abi Bank.sol
After above step, you will get .abi ane .bin two item.

Using Web3.js to deploy your Smart Contract.
installation : npm install web3
If something wrong duting installing try
npm install --global --production windows-build-tools
then download web3 again.

Now, you can deploy your Smart Contract.
node deploy.js

After you deploy your Smart Contract on the blockchain, put the address which is your Smart Contract belone into address.txt.
In your Smart Contract, there has a instruction " fs.writeFileSync('./address.txt', contractAddress) " corresponded to address.txt.

Now you can try every function in this folder. 
