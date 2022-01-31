require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict forget force sugar guard render remind concert hunt hill fortune spoil'; 
let testAccounts = [
"0x388e3705116715c50754a9898caa0fe523026b31f096a40c5d0b7c2a717c9b0a",
"0xbb944fe9b2d39af95a2d23d3affb1701ea6a2c7622c4f02e0958104b75c9652a",
"0xb8a6b3d95f22e3f51304c98e245babe809fcadc3ee410648e3a87a8854b46610",
"0xf69ed8866cce31cfd422ec105fbd3db07ddbc9eb4b10139bd827e34f7f899177",
"0xfcac62656bdb3cbadb410548a8fffe18397d9a0b74259a07673f2a7cb265ac5d",
"0x7240effa8662aafa8b71551583061ec5b46a376f15160ae54a081ff09a8255c1",
"0x83a39a5af4915804bfab3cdc6bcc0ee0363e429738c09927f9e58b0bf088b516",
"0x367db6fe5a9c4f03f01560d03f87e6895c711850a85e3ed9abf51ae5c33bc669",
"0x930eb271e094ce524208803a76f4785da800c438457239502100c77a1fa3b0eb",
"0x2800bb58d830db607ab7c7f3c324dbe61748cc8db20fc4ab7a5c2fd619f3fb3d"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


