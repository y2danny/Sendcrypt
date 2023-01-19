require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/-InHdKfSZIzIDvfK7aO9VxEhkTERtWjQ',
      accounts: ['400e99421863268f3dfeae8428df738306345f8d8163d59ec190b4785a104f21'],
    },
  },
};