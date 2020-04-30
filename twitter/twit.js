


  const axios = require("axios");
  const readLineSync = require("readline-sync");
  var username= readLineSync.question("Enter the username:");
  
    axios
  .get(`https://api.github.com/users/${username}`)
  .then((response) => {

   
 })
  .catch((err) => {

    console.log("Not a valid username,Try again!");
   
  });
