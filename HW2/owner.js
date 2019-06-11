const fs = require('fs')
const Web3 = require('web3')

const ganache = require('ganache-cli')
const web3 = new Web3('http://127.0.0.1:8545', null, { transactionConfirmationBlocks: 1 /* This is the critical part */ })
//let web3 = new Web3('http://localhost:8545')

const abi = JSON.parse(fs.readFileSync('./contract/Bank_sol_Bank.abi').toString())
const address = fs.readFileSync('./address.txt').toString()

let bank = new web3.eth.Contract(abi, address)

web3.eth.getAccounts().then(function (accounts) {

    // get contract owner
    // your code
    bank.methods.getOwner().call({
        from: accounts[0]
    })
    	.then((owner) => { console.log(owner) })
})