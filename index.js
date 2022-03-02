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

