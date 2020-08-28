var chocolates = [
  "green",
  "green",
  "green",
  "silver",
  "blue",
  "crimson",
  "purple",
  "red",
  "crimson",
  "purple",
  "purple",
  "green",
  "pink",
  "blue",
  "red",
  "silver",
  "crimson",
  "purple",
  "silver",
  "silver",
  "red",
  "green",
  "red",
  "silver",
  "pink",
  "crimson",
  "purple",
  "green",
  "red",
  "silver",
  "crimson",
  "pink",
  "silver",
  "blue",
  "pink",
  "crimson",
  "crimson",
  "crimson",
  "red",
  "purple",
  "purple",
  "green",
  "pink",
  "blue",
  "red",
  "crimson",
  "silver",
  "purple",
  "purple",
  "purple",
  "red",
  "purple",
  "red",
  "blue",
  "silver",
  "green",
  "crimson",
  "silver",
  "blue",
  "crimson",
  "purple",
  "green",
  "pink",
  "green",
  "red",
  "silver",
  "crimson",
  "blue",
  "green",
  "red",
  "red",
  "pink",
  "blue",
  "silver",
  "pink",
  "crimson",
  "purple",
  "green",
  "red",
  "blue",
  "red",
  "purple",
  "silver",
  "blue",
  "pink",
  "silver",
  "crimson",
  "silver",
  "blue",
  "purple",
  "purple",
  "green",
  "blue",
  "blue",
  "red",
  "red",
  "silver",
  "purple",
  "silver",
  "crimson",
];

//Progression 1: Add ___ chocolates of ____ color
const addChocolates = (chocolates, color, count) => {
  //If count less than 1 then shows error message
  if (count < 1) return "Number cannot be zero/negative";

  // adds elements at the start of chocolates
  for (let i = 0; i < count; i++) {
    chocolates.unshift(color);
  }
};

//Progression 2: Remove ___ chocolates from the top the dispenser
const removeChocolates = (chocolates, number) => {
  let removedChocolates = [];
  //If count less than number then shows message
  if (chocolates.length < number) {
    return "Insufficient chocolates in the dispenser";
  }
  //If count less than 1 then shows error message
  if (number < 1) {
    return "Number cannot be zero/negative";
  }
  // push elements into removed elements by picking the elments form start/top of choolates array
  for (let i = 0; i < number; i++) {
    removedChocolates.push(chocolates.shift());
  }
  return removedChocolates;
};

//Progression 3: Dispense ___ chocolates
const dispenseChocolates = (chocolates, number) => {
  let dispensedChocolates = [];
  if (number <= 0) return "Number cannot be zero/negative";
  if (number > chocolates.length)
    return "Insufficient chocolates in the dispenser";

  // removes items from end of chocolates array and pushes them into dispensedChocolates
  for (let i = 0; i < number; i++) {
    dispensedChocolates.push(chocolates.pop());
  }
  return dispensedChocolates;
};

//Progression 4: Dispense ___ chocolates of ____ color
const dispenseChocolatesOfColor = (chocolates, number, color) => {
  let dispensedChocolatesColor = [];
  let dispensedNumber = 0;
  if (chocolates.length < number)
    return "Insufficient chocolates in the dispenser";
  if (number <= 0) return "Number cannot be zero/negative";

  // removing chocolates of specified color from end
  for (let i = chocolates.length - 1; i >= 0; i--) {
    if (chocolates[i] == color) {
      dispensedChocolatesColor.push(chocolates.pop());
      dispensedNumber++;
      if (dispensedNumber == number) return dispensedChocolatesColor;
    }
  }
  if (dispensedNumber != number)
    return "Insufficient chocolates in the dispenser";
};

//Progression 5: Display ___ chocolates of each color. Return array of numbers [green, silver, blue, crimson, purple, red, pink]
const noOfChocolates = (chocolates) => {
  let inOrderChocolates = [
    "green",
    "silver",
    "blue",
    "crimson",
    "purple",
    "red",
    "pink",
  ];
  // contains count of each color of chocolates in chocolates array
  let uniqueColors = {};
  // pushing the colors into uniqueColors as property and incrementing its count
  chocolates.forEach((color) => {
    if (!(color in uniqueColors)) {
      uniqueColors[`${color}`] = 0;
    }
    uniqueColors[`${color}`]++;
  });

  // ordering the chocolate color count as specifed in inOrderChocolates variable
  let chocolateCount = [];
  inOrderChocolates.forEach((color) => {
    if (color in uniqueColors) {
      chocolateCount.push(uniqueColors[`${color}`]);
    }
  });
  return chocolateCount;
};

//Progression 6: Sort chocolates based on count in each color. Return array of colors
const sortChocolateBasedOnCount = (chocolates) => {
  // contains count of each color of chocolates in chocolates array
  let uniqueColors = {};

  // pushing the colors into uniqueColors as property and incrementing its count
  chocolates.forEach((color) => {
    if (!(color in uniqueColors)) {
      uniqueColors[`${color}`] = 0;
    }
    uniqueColors[`${color}`]++;
  });

  // retrieving the sorted color form colorCountArray into sortedChocolates array.
  let sortedChocolates = Object.entries(uniqueColors)
    .sort()
    .sort((a, b) => b[1] - a[1]);

  // making chocolates an empty array
  chocolates.length = 0;

  sortedChocolates.forEach((item) => {
    for (let i = 1; i <= item[1]; i++) {
      chocolates.push(item[0]);
    }
  });

  return chocolates;
};

//Progression 7: Change ___ chocolates of ____ color to ____ color
const changeChocolateColor = (chocolates, number, color, finalColor) => {
  // If number = 0 then show error message
  if (number <= 0) {
    return "Number cannot be zero/negative";
  }

  // change color instead of intial color
  if (color == finalColor) {
    return "Can't replace the same chocolates";
  }

  // change color instead of intial color for specified number of times
  chocolates.forEach((chocolateColor, index) => {
    if (chocolateColor == color && number > 0) {
      chocolates[index] = finalColor;
      number--;
    }
  });
  return chocolates;
};

//Progression 8: Change all chocolates of ____ color to ____ color and return [countOfChangedColor, chocolates]
const changeChocolateColorAllOfxCount = (chocolates, color, finalColor) => {
  // If change color of the color are same then error message show
  if (color == finalColor) {
    return "Can't replace the same chocolates";
  }

  // change color instead of intial color and count of finalColor
  chocolates.forEach((chocolateColor, index) => {
    if (chocolateColor == color) {
      chocolates[index] = finalColor;
    }
  });

  return [chocolates.length, chocolates];
};

//Challenge 1: Remove one chocolate of ____ color from the top
const removeChocolateOfColor = (chocolates, color) => {
  return chocolates.slice(chocolates.indexOf(color), 1);
};

//Challenge 2: Dispense 1 rainbow colored colored chocolate for every 3 chocolates of the same color dispensed
const dispenseRainbowChocolates = (number) => {
  let rainbowChocolates = 0;
  let colorCount = {};

  for (let i = 0; i < number; i++) {
    if (!(chocolates[i] in colorCount)) colorCount[chocolates[i]] = 0;
    colorCount[chocolates[i]]++;
  }

  for (let chocolate in colorCount) {
    if (colorCount[chocolate] >= 3)
      rainbowChocolates += Math.floor(colorCount[chocolate] / 3);
  }
  console.log(colorCount);
  return rainbowChocolates;
};
