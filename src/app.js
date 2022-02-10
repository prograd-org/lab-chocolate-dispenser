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
  if (count < 1) {
    return "Number cannot be zero/negative";
  } else {
    for (i = 0; i < count; i++) {
      chocolates.unshift(color); //unshift() add items begining of the array
    }
  }
}

//Progression 2: Remove ___ chocolates from the top the dispenser
function removeChocolates(chocolates, number) {
  let remov_arr = [];
  if (number > chocolates.length) {
    return "Insufficient chocolates in the dispenser";
  } else if (number < 1) {
    return "Number cannot be zero/negative";
  } else {
    for (i = 0; i < number; i++) {
      remov_arr.push(chocolates.shift()); //remove items from top of chocolates arr & push it to remov_arr
    }
    return remov_arr;
  }
}
//Progression 3: Dispense ___ chocolates
function dispenseChocolates(chocolates, number) {
  let remov_arr = [];
  if (number > chocolates.length) {
    return "Insufficient chocolates in the dispenser";
  } else if (number < 1) {
    return "Number cannot be zero/negative";
  } else {
    for (i = 0; i < number; i++) {
      remov_arr.push(chocolates.pop()); //remove items from buttom of chocolates arr & push it to remov_arr
    }
    return remov_arr;
  }
}
//Progression 4: Dispense ___ chocolates of ____ color
function dispenseChocolatesOfColor(chocolates, number, color) {
  let return_arr = [];
  if (number > chocolates.length) {
    return "Insufficient chocolates in the dispenser";
  } else if (number < 1) {
    return "Number cannot be zero/negative";
  } else {
    for (i = 0; i < number; i++) {
      return_arr.push(chocolates.pop(color)); //remove items from buttom of chocolates arr & push it to return_arr
    }
    return return_arr;
  }
}
//Progression 5: Display ___ chocolates of each color. Return array of numbers [green, silver, blue, crimson, purple, red, pink]
let arr1 = ["green", "silver", "blue", "crimson", "purple", "red", "pink"];
function noOfChocolates(chocolates, colors = arr1) {
  let result = [];
  let count = chocolates.length;
  if (count > 0) {
    let colorCount = [];
    colors.forEach((color) => {
      colorCount.push(chocolates.filter((word) => word === color).length);
    });
    result = colorCount.filter((count) => count > 0);
  }
  return result;
}
//Progression 6: Sort chocolates based on count in each color. Return array of colors
let sortChocolateBasedOnCount = (chocolates) => {
  let chocolate = chocolates.reduce((color, freq) => {
    if (freq in color) {
      color[freq]++;
    } else {
      color[freq] = 1;
    }
    return color;
  }, {});
  let res = chocolates.sort((color, freq) => {
    if (chocolate[freq] > chocolate[color]) {
      return 1;
    }
    if (chocolate[freq] < chocolate[color]) {
      return -1;
    }
    if (color > freq) {
      return 1;
    }
    if (color < freq) {
      return -1;
    }
  });
  chocolates = res;
};

//Progression 7: Change ___ chocolates of ____ color to ____ color
function changeChocolateColor(chocolates, number, color, finalColor) {
  var newarr = chocolates;
  var count = 0;
  if (color == finalColor) {
    return "Can't replace the same chocolates";
  } else if (number > 0) {
    for (var i = 0; i < newarr.length; i++) {
      if (newarr[i] == color && count <= number) {
        newarr[i] = finalColor;
        count++;
      }
    }
    return newarr;
  } else {
    return "Number cannot be zero/negative";
  }
}
//Progression 8: Change all chocolates of ____ color to ____ color and return [countOfChangedColor, chocolates]
function changeChocolateColorAllOfxCount(chocolates, color, finalColor) {
  var count = 0;
  if (color == finalColor) {
    return "Can't replace the same chocolates";
  } else if (color != finalColor) {
    for (var i = 0; i <= chocolates.length; i++) {
      if (chocolates[i] == color) {
        chocolates[i] = finalColor;
      }
    }
    for (var i = 0; i <= chocolates.length; i++) {
      if (chocolates[i] == finalColor) count++;
    }
    return [count, chocolates];
  }
}
//Challenge 1: Remove one chocolate of ____ color from the top

//Challenge 2: Dispense 1 rainbow colored colored chocolate for every 3 chocolates of the same color dispensed
