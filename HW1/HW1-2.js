// npm-library
const Wallet = require('ethereumjs-wallet');
const keccak256 = require('js-sha3').keccak256;

// keypair
const wallet = Wallet.generate();
 
// privKey
const privKey = wallet.getPrivateKey();

console.log("privKey:", privKey.toString('hex'));
 
// pubKey
const pubKey = wallet.getPublicKey();

console.log("pubKey:", pubKey.toString('hex'));

// address

let address = "0x"+keccak256(pubKey).slice(-40);
console.log("address:", address);

var wallets = Wallet.fromPrivateKey(privKey);
console.log("wallet:", wallet.toV3String('nccu'));


