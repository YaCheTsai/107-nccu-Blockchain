const fs = require('fs')
const Web3 = require('web3')

//let web3 = new Web3('http://127.0.0.1:8545')
const ganache = require('ganache-cli')
const web3 = new Web3('http://127.0.0.1:8545', null, { transactionConfirmationBlocks: 1 /* This is the critical part */ })
//web3.setProvider(new web3.providers.HttpProvider('http://127.0.0.1:8545'));
// ... send your transaction using web3

const abi = JSON.parse(fs.readFileSync('./contract/Bank_sol_Bank.abi').toString())
const bytecode = fs.readFileSync('./contract/Bank_sol_Bank.bin').toString()

//let bank = new web3.eth.Contract(abi)


const deploy = async () => {
  // Get list of accounts
  const accounts = await web3.eth.getAccounts();

  // Create a contract with exhibition ABI, then deply with bytecode
  // and then finally send a transaction to rinkeby network with gas
  // and which account its deploy from
  const result = await new web3.eth.Contract(abi)
    .deploy({
      data: bytecode
    })
    .send({ 
    	from: accounts[0], 
    	gas: "4300000" 
    });

  // Note this address. It will be used to create contract instance from Angular 5 application.
  console.log("contract deployed to", result.options.address);
  fs.writeFileSync('./address.txt', result.options.address)

};

deploy();

