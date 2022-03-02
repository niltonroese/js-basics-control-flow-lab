function scuberGreetingForFeet(length) {
  if (length <= 400) { 
  return 'This one is on me!';
} else if (length >2000 && length <2500) {
  return 'I will gladly take your thirty bucks.';
} else if (length >2500) {
  return 'No can do.';
}
}

function ternaryCheckCity(city) {
  const canDO = 'Ok, sounds good.';
  const cannotDo = 'No go.';
    return (city !== "NYC") ? cannotDo : canDO; 
} 
console.log(ternaryCheckCity("test"));


function switchOnCharmFromTip(tip) {
switch (tip) {
case "generous":
  return "Thank you so much.";
  break;
case "not as generous":
  return "Thank you.";
  break;
default:
  return "Bye.";
  break;
}
}

function switchOnCharmFromTip(tip){
  const statement1 = "Thank you so much.";
  const statement2 = "Thank you.";
  const statement3 = "Bye.";
  if (tip === "generous") {
    return statement1;
  } else if (tip === "not as generous") {
    return statement2;
  } else if (tip === "thanks for everything") {
    return statement3;
  }
}