

function LoveNation(choose) {
  if (choose === "yes") {
    console.log("Stay Home, Stay safe");
  } else {
    console.log("Corona affected");
    return covid19('');
  }
}

function covid19(choose) {
  if (choose === "yes") {
    console.log("Be under Isolation");
    return LoveNation("yes");
  } else {
    var die =0;
    console.log("No chance to live");
    return die;
  }
}
LoveNation("no");
