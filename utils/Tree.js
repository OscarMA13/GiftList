const MerkleTree = require("./MerkleTree")
const niceList = require('../utils/niceList.json')
//I made it where I have a merkleTree with the nice list and as well a root.
const MainmerkleTree = new MerkleTree(niceList);
const MainRoot = MainmerkleTree.getRoot();
console.log(MainRoot);