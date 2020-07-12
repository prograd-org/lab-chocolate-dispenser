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
  }
  for (i = 0; i < count; i++) {
    chocolates.unshift(color);
  }
}

//Progression 2: Remove ___ chocolates from the top the dispenser
function removeChocolates(chocolates, number) {
  let arr2 = [];
  if (chocolates.length < number) {
    return "Insufficient chocolates in the dispenser";
  } else if (number < 1) {
    return "Number cannot be zero/negative";
  }
  for (i = 0; i < number; i++) {
    arr2[i] = chocolates.shift();
  }
  return arr2;
}

//Progression 3: Dispense ___ chocolates
function dispenseChocolates(chocolates, number) {
  let arr3 = [];

  if (number > chocolates.length) {
    return "Insufficient chocolates in the dispenser";
  } else if (number < 1) {
    return "Number cannot be zero/negative";
  }

  for (i = 0; i < number; i++) {
    arr3[i] = chocolates.pop();
  }
  return arr3;
}

//Progression 4: Dispense ___ chocolates of ____ color
function dispenseChocolatesOfColor(chocolates, number, color) {
  var k = chocolates.length;
  var j = 0;
  let arr4 = [];
  if (number > chocolates.length) {
    return "Insufficient chocolates in the dispenser";
  } else if (number < 1) {
    return "Number cannot be zero/negative";
  }

  for (; k >= 0; k--) {
    if (chocolates[k] == color) {
      arr4[j] = chocolates.pop();
      j++;
      if (j == number) {
        return arr4;
      }
    }
  }
}

//Progression 5: Display ___ chocolates of each color. Return array of numbers [green, silver, blue, crimson, purple, red, pink]
function noOfChocolates(chocolates) {
  var count = 0;
  var counts = [];
  arr5 = ["green", "silver", "blue", "crimson", "purple", "red", "pink"];
  //let counts = arr5.map(function (color)
  if (chocolates.length <= 0) {
    return [];
  }
  for (j = 0; j < arr5.length; j++) {
    for (i = 0; i < chocolates.length; i++) {
      if (arr5[j] == chocolates[i]) {
        count++;
      }
    }
    if (count == 0) {
      count = undefined;
    } else {
      counts.push(count);
    }
    count = 0;
  }
  return counts;
}

//Progression 6: Sort chocolates based on count in each color. Return array of colors
// var choc = ['red','blue','green','red']
// sortChocolateBasedOnCount(choc)

// function sortChocolateBasedOnCount(chocolates) {
//     return ["red", "red", "blue", "green"]
function sortChocolateBasedOnCount(chocolates) {
  var count = 0;
  var counts = [];
  var countref = [];
  var sortArr = [];

  let s2 = ""; //for unique colors
  let k = 1;
  let output = [];
  output[0] = chocolates[0];
  for (j = 1; j < chocolates.length; j++) {
    s2 = chocolates[j];
    var a = output.indexOf(s2);
    if (a < 0) {
      output[k] = s2;
      k = k + 1;
    }
  }
  console.log(output);
  var output11 = output;
  // output11.sort()
  // console.log(output)

  for (j = 0; j < output.length; j++) {
    //for count of each color
    for (i = j; i < chocolates.length; i++) {
      if (output[j] == chocolates[i]) {
        count = count + 1;
        //console.log(count)
      }
    }
    counts.push(count); //storing the count of each different colors
    countref.push(count); //duplicate array for reference
    count = 0;
  }
  counts.sort((a, b) => b - a); //ascending order
  //counts.reverse(); //descending order
  let s22 = "";
  k = 1;
  let output1 = [];
  output1[0] = counts[0];
  for (j = 1; j < counts.length; j++) {
    s2 = counts[j];
    var a1 = output1.indexOf(s2);
    if (a1 < 0) {
      output1[k] = s2; //unique counts
      k = k + 1;
    }
  }
  console.log(output1);
  console.log(counts)
  console.log(countref)
  for (i = 0; i < output1.length; i++) {
    for (k = 0; k < countref.length; k++) {
      if (output1[i] == countref[k]) {
        for (j = 0; j < output1[i]; j++) {
          sortArr.push(output[k]);
        }
      }
    }
  }

  for (i = 0; i < chocolates.length; i++) {
    chocolates[i] = sortArr[i];
  }

  //return ["red", "red", "green", "blue"]

  console.log(sortArr)

  //chocolates = ["red", "red", "blue", "green"]
}

//Progression 7: Change ___ chocolates of ____ color to ____ color
function changeChocolateColor(chocolates, number, color, finalColor) {
  var count = 0;
  if (chocolates.length == 0) return chocolates;
  else if (number <= 0) return "Number cannot be zero/negative";
  for (var i = 0; i <= chocolates.length; i++) {
    if (chocolates[i] == finalColor) return "Can't replace the same chocolates";
    if (chocolates[i] == color) {
      chocolates[i] = finalColor;
      count++;
      if (count == number) return chocolates;
    }
  }
  if (count < number) return "Insufficient chocolates in the dispenser";
}

//Progression 8: Change all chocolates of ____ color to ____ color and return [countOfChangedColor, chocolates]
function changeChocolateColorAllOfxCount(chocolates, Color, finalColor) {
  k = 0;
  if (Color == finalColor) return "Can't replace the same chocolates";
  else
    for (var i = chocolates.length; i >= 0; i--) {
      if (chocolates[i] == Color) {
        chocolates[i] = finalColor;
        k++;
      }
    }
  var temp1 = [chocolates.length, chocolates];
  return temp1;
}

//Challenge 1: Remove one chocolate of ____ color from the top

//Challenge 2: Dispense 1 rainbow colored colored chocolate for every 3 chocolates of the same color dispensed