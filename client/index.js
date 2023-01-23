const axios = require("axios");
const niceList = require("../utils/niceList.json");
const MerkleTree = require("../utils/MerkleTree");

const serverUrl = "http://localhost:1225";

async function main() {
  // TODO: how do we prove to the server we're on the nice list?

  //these look for the name in the list and checks if it exists.
  const name = "Oscar";
  const index = niceList.findIndex((n) => n === name);
  //these two creates the merkletree and the proof
  const merkleTree = new MerkleTree(niceList);
  const proof = merkleTree.getProof(index);

  //checks if both are verified
  const { data: gift } = await axios.post(`${serverUrl}/gift`, {
    // TODO: add request body parameters here!
    proof,name});

  console.log({ gift });
}

main();