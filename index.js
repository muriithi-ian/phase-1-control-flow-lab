function scuberGreetingForFeet(feet) {
  // Write your code here!
  if (feet > 2500) {
    return "No can do.";
  }
  if (feet > 2000) {
    return "I will gladly take your thirty bucks.";
  }
  if (feet < 400) {
    return "This one is on me!";
  }
}

function ternaryCheckCity(arg) {
  // Write your code here!
  if (arg === "NYC") {
    return "Ok, sounds good.";
  }
  if (arg === "Pittsburgh") {
    return "No go.";
  }
}

function switchOnCharmFromTip(arg) {
  // Write your code here!
  switch (arg) {
    case "generous":
      return "Thank you so much.";
    case "not as generous":
      return "Thank you.";
    default:
      return "Bye.";
  }
}

// console.log(scuberGreetingForFeet(2501));
