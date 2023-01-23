const express = require('express');
const MerkleTree = require('../utils/MerkleTree');
const verifyProof = require('../utils/verifyProof');
const niceList = require('../utils/niceList.json')

const port = 1225;

const app = express();
app.use(express.json());

// TODO: hardcode a merkle root here representing the whole nice list
// paste the hex string in here, without the 0x prefix
//look at utils Tree.js on how I got the MerkleTree with the nice list.

// this is my Merkle_ root to check if it is in my list.
const MERKLE_ROOT = 'f6e67ee34586ec5fdcd6eafbcfd033dd050d6d801ff8581b6193309a747b110c';

app.post('/gift', (req, res) => {
  // grab the parameters from the front-end here
// got both name and the proof and as well verifed if it was true or false.
  const body = req.body;
  const { proof, name } = body;
  const isInTheList = verifyProof(proof, name, MERKLE_ROOT);
  if(isInTheList) {
    res.send("You got a toy robot!");
  }
  else {
    res.send("You are not on the list :(");
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}!`);
});