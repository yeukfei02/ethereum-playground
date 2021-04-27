# ethereum-playground

ethereum-playground

## Requirement

- install yarn
- install node (v12+)
- install metamask

## Testing and run

```zsh
// install node dependencies
$ yarn

// compiles the entire project, building all artifacts
$ npx hardhat compile

// starts a JSON-RPC server on top of Hardhat Network
$ npx hardhat node

// runs mocha tests
$ npx hardhat test

// runs a user-defined script after compiling the project
$ npx hardset run ./scripts/deploy.js --network <localhost>

// clears the cache and deletes all artifacts
$ npx hardhat clean
```
