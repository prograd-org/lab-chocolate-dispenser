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
function addChocolates(chocolates, color, count) {
  if (count > 0) {
    for (let i = 0; i < count; i++) {
      chocolates.unshift(color);
    }
    return chocolates;
  } else {
    return "Number cannot be zero/negative";
  }
}

//Progression 2: Remove ___ chocolates from the top the dispenser

function removeChocolates(chocolates, count) {
  if (count > chocolates.length) {
    return "Insufficient chocolates in the dispenser";
  } else if (count < 0) {
    return "Number cannot be zero/negative";
  } else {
    var spliced = chocolates.splice(0, count);
    return spliced;
  }
}

//Progression 3: Dispense ___ chocolates

function dispenseChocolates(chocolates, count) {
  if (count > chocolates.length) {
    return "Insufficient chocolates in the dispenser";
  } else if (count <= 0) {
    return "Number cannot be zero/negative";
  } else {
    var dispensed = new Array(count);
    var i = 0;
    // // var dispensed = chocolates.splice((count.length - count), count.length);
    while (count--) dispensed[i++] = chocolates.pop();
    return dispensed;
    // for (let i = 0; i < count; i++)
    //     dispensed[i] = chocolates.pop();

    // return dispensed;
  }
}

//Progression 4: Dispense ___ chocolates of ____ color

function dispenseChocolatesOfColor(chocolates, count, color) {
  if (count > chocolates.length) {
    return "Insufficient chocolates in the dispenser";
  } else if (count <= 0) {
    return "Number cannot be zero/negative";
  } else {
    var dispensed = [];
    var j = 0;
    for (let i = chocolates.length; i >= 0; i--) {
      if (color == chocolates[i]) {
        dispensed[j++] = chocolates.pop();
        // dispensed[j++] = chocolates.splice(i, 1);
        if (j == count) return dispensed;
      }
    }
  }
}

//Progression 5: Display ___ chocolates of each color. Return array of numbers [green, silver, blue, crimson, purple, red, pink]
// function noOfChocolates(chocolates) {
//     var numberOfChocolates = [];

//     var colors = ["green", "silver", "blue", "crimson", "purple", "red", "pink"];
//    for (let i = 0; i < colors.length; i++) {
//             var count = 0;
//             for (let j = 0; j < chocolates.length; j++) {
//                 if (colors[i] == chocolates[j])
//                     count++;
//             }
//             numberOfChocolates[i] = count;
//         }
//     }
// }

function noOfChocolates(chocolates) {
  var numberOfChocolates = [];
  var colors = ["green", "silver", "blue", "crimson", "purple", "red", "pink"];
  for (let i = 0; i < colors.length; i++) {
    var count = 0;
    for (let j = 0; j < chocolates.length; j++) {
      if (colors[i] == chocolates[j]) {
        count++;
      }
    }
    numberOfChocolates[i] = count;
  }
  return numberOfChocolates.filter(Number);
}

//Progression 6: Sort chocolates based on count in each color. Return array of colors
function sortChocolateBasedOnCount(chocolates) {
  let cho = chocolates.reduce(function (temp1, temp2) {
    if (temp2 in temp1) {
      temp1[temp2]++;
    } else {
      temp1[temp2] = 1;
    }
    return temp1;
  }, {});
  let Array = chocolates.sort((temp1, temp2) => {
    if (cho[temp2] > cho[temp1]) {
      return 1;
    }
    if (cho[temp2] < cho[temp1]) {
      return -1;
    }
    if (temp1 > temp2) {
      return 1;
    }
  });
  return Array;
}

//Progression 7: Change ___ chocolates of ____ color to ____ color
function changeChocolateColor(chocolates, count, color, finalColor) {
  if (count > 0) {
    if (color == finalColor) {
      return "Can't replace the same chocolates";
    } else {
      for (let i = 0; i < chocolates.length; i++)
        if (chocolates[i] == color) {
          chocolates[i] = finalColor;
          count--;
          if (count == 0) return chocolates;
        }
    }
  } else
    return "Number cannot be zero/negative' when zero/negative values are passed as an argument ";
}

//Progression 8: Change all chocolates of ____ color to ____ color and return [countOfChangedColor, chocolates]

// function changeChocolateColorAllOfxCount(chocolates, color, finalColor) {
//     if (color == finalColor) {
//         return "Can't replace the same chocolates";
//     } else if (count > 0) {

//         for (let i = 0; i < chocolates.length; i++)
//             if (chocolates[i] == color)
//                 chocolates[i] = finalColor;
//         return chocolates;

//     } else
//         return "Number cannot be zero/negative' when zero/negative values are passed as an argument ";
// }

function changeChocolateColorAllOfxCount(chocolates, currentColor, finalColor) {
  if (currentColor == finalColor) {
    return "Can't replace the same chocolates";
  } else {
    for (var i = chocolates.length; i >= 0; i--) {
      if (chocolates[i] == currentColor) chocolates[i] = finalColor;
    }
  }
  var count = chocolates.filter((x) => x == finalColor).length;

  return [count, chocolates];
}
//Challenge 1: Remove one chocolate of ____ color from the top

//Challenge 2: Dispense 1 rainbow colored colored chocolate for every 3 chocolates of the same color dispensed
