const express = require('express');
const app = express();

const urls = [
  'https://www.jennynellis.com/comedycentral',
  'https://media2.giphy.com/media/3oz8xEdgBBLqBj7LsA/giphy.gif?cid=ecf05e47c0wrxre4hq6h8q6esp2j71lc07l5aiaukffgtxer&ep=v1_gifs_search&rid=giphy.gif&ct=g',
  'https://media3.giphy.com/media/6vF3Y99RLkc7hRBYAD/giphy.gif?cid=ecf05e47ikagnu8lnq8ydfmhoh500mnndhnno9n0edzwlnmv&ep=v1_gifs_search&rid=giphy.gif&ct=g',
  'https://media4.giphy.com/media/eeUJaTwsHh3tswkaYm/giphy.gif?cid=ecf05e4724kqli40rmp2t946co55o5sdlxazqo6tn2o23bjw&ep=v1_gifs_search&rid=giphy.gif&ct=g',
  'http://hands.wtf/',
  // Add more URLs to the list as needed
];

app.get('/redirect', (req, res) => {
  const randomIndex = Math.floor(Math.random() * urls.length);
  const randomURL = urls[randomIndex];
  res.redirect(randomURL);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});