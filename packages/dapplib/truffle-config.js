require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good entire sugar tooth film ring remain history guess private orange ghost'; 
let testAccounts = [
"0xa9fdcba91a480e3324b88372ef636149ff55b5324199e49d9ce8cd539d842910",
"0x39008b993b9d4bd63efbf824b2ae3c11dbaf45686141c8e5f188138c004b22b2",
"0xdd4b967c06e7492fc870ecbba7afa185d69cdf3ab130f757609ba82e9bac1afe",
"0xee467dcc0005dcd671dd7a0ef11050218e39b2b948ea1d9d191135833d0c999d",
"0x76d075c4ef4500b2fffc71a5e4ec57de43fd1b19ac9b2a1a7f4993e484b8595b",
"0x7450646db929fd08e215ab9a91c09dd44bcee8bac126721927d3f97cb5054996",
"0x5af582ca2f6eaf0030403c0eb76d6c178b88af6da21d370953d8f7d0bc46f970",
"0x044e32d97680fb8146e320a9aa047210c5ea9dd8dfd1f27e566d163ea3bbf864",
"0xedcfb52c72d7c90ceef7a0a02092703da23b0e04147b4a5ff41c630b5412ceb2",
"0xa87cd3b41da9c7b789a60e78fba9908f3c2b0daf67bad12526b879ff0666f4ea"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

