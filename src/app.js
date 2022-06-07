var chocolates = [
    "green", "green", "green", "silver", "blue", "crimson", "purple", "red", "crimson", "purple",
    "purple", "green", "pink", "blue", "red", "silver", "crimson", "purple", "silver", "silver",
    "red", "green", "red", "silver", "pink", "crimson", "purple", "green", "red", "silver",
    "crimson", "pink", "silver", "blue", "pink", "crimson", "crimson", "crimson", "red", "purple",
    "purple", "green", "pink", "blue", "red", "crimson", "silver", "purple", "purple", "purple",
    "red", "purple", "red", "blue", "silver", "green", "crimson", "silver", "blue", "crimson",
    "purple", "green", "pink", "green", "red", "silver", "crimson", "blue", "green", "red",
    "red", "pink", "blue", "silver", "pink", "crimson", "purple", "green", "red", "blue",
    "red", "purple", "silver", "blue", "pink", "silver", "crimson", "silver", "blue", "purple",
    "purple", "green", "blue", "blue", "red", "red", "silver", "purple", "silver", "crimson"
];

const addChocolates = (chocolates, color, count) => {
  // If count lessthan 1 then shiow erroe message
  if (count < 1) {
    return "Number cannot be zero/negative"
  }

  // add elements from chocolates (number) of thimes from top (start of array) side
  for (i = 0; i < count; i++) {
    chocolates.unshift(color)
  }
  return chocolates
}
//Progression 2: Remove ___ chocolates from the top the dispenser

const removeChocolates = (chocolates, number) => {
  //If number is greaterthan total length of chochocolates array and lessthan 1 then show error message
  if (number > chocolates.length) {
    return "Insufficient chocolates in the dispenser"
  } else if (number < 1) {
    return "Number cannot be zero/negative"
  }

  var removedChocolates = []

  // push element in removedChocolates for (number) of thimes from top (start of array) side
  for (i = 0; i < number; i++) removedChocolates.push(chocolates.shift())
  return removedChocolates
}

//Progression 3: Dispense ___ chocolates

const dispenseChocolates = (chocolates, number) => {
  //If number is greaterthan total length of chochocolates array and lessthan 1 then show error message
  if (number > chocolates.length) {
    return "Insufficient chocolates in the dispenser"
  } else if (number < 1) {
    return "Number cannot be zero/negative"
  }

  var removedChocolates = []

  // push element in removedChocolates for (number) of thimes from bottom (end of array) side
  for (i = 0; i < number; i++) removedChocolates.push(chocolates.pop())
  return removedChocolates
}

//Progression 4: Dispense ___ chocolates of ____ color

const dispenseChocolatesOfColor = (chocolates, number, color) => {
  //If number is greaterthan total length of chochocolates array and lessthan 1 then show error message
  if (number > chocolates.length) {
    return "Insufficient chocolates in the dispenser"
  } else if (number < 1) {
    return "Number cannot be zero/negative"
  }

  var removedChocolates = []

  // push element in removedChocolates if chocolates array element and color both are same
  for (i = chocolates.length - 1; i >= 0; i--) {
    if (chocolates[i] == color) {
      removedChocolates.push(chocolates.splice(i, 1)[0])
    }
  }
  return removedChocolates
}

//Progression 5: Display ___ chocolates of each color. Return array of numbers [green, silver, blue, crimson, purple, red, pink]

const noOfChocolates = (chocolates) => {
  var chocolatesCount = []
  var inOrderChocolates = [
    "green",
    "silver",
    "blue",
    "crimson",
    "purple",
    "red",
    "pink",
  ]

  // make chocolatesCount array and store value of count of the color
  for (i = 0; i < inOrderChocolates.length; i++) {
    var count = 0
    for (j = 0; j < chocolates.length; j++) {
      if (inOrderChocolates[i] == chocolates[j]) {
        count++
      }
    }
    // if count is 0 it means color is not in chocolates
    if (count != 0) {
      chocolatesCount.push(count)
    }
  }
  return chocolatesCount
}

//Progression 6: Sort chocolates based on count in each color. Return array of colors

const sortChocolateBasedOnCount = (chocolates) => {
  var chocolatesCount = {}
  var sortArray = []

  // Count chocolates and store count with color name in object chocolatesCount
  for (i = 0; i < chocolates.length; i++) {
    if (chocolatesCount[chocolates[i]] == undefined) {
      chocolatesCount[chocolates[i]] = 1
    } else {
      chocolatesCount[chocolates[i]]++
    }
  }

  // Sort chocolateCount Object with its count and color
  sortArray = Object.entries(chocolatesCount)
    .sort()
    .sort((a, b) => b[1] - a[1])

  // empty array
  chocolates.length = 0

  // store colors with N times(count of color) in chocolates array from sortArray
  for (i = 0; i < sortArray.length; i++) {
    for (j = 0; j < sortArray[i][1]; j++) {
      chocolates.push(sortArray[i][0])
    }
  }

  return chocolates
}

//Progression 7: Change ___ chocolates of ____ color to ____ color

const changeChocolateColor = (chocolates, number, color, finalColor) => {
  // If number = 0 then show error message
  if (number <= 0) {
    return "Number cannot be zero/negative"
  }

  // change color instead of intial color
  if (color == finalColor) {
    return "Can't replace the same chocolates"
  }

  // change color instead of intial color for (number) of times
  for (i = 0; i < chocolates.length; i++) {
    if (chocolates[i] == color && number > 0) {
      chocolates[i] = finalColor
      number--
    }
  }
  return chocolates
}

//Progression 8: Change all chocolates of ____ color to ____ color and return [countOfChangedColor, chocolates]

const changeChocolateColorAllOfxCount = (chocolates, color, finalColor) => {
  var number = 0

  // If change color of the color are same then error message show
  if (color == finalColor) {
    return "Can't replace the same chocolates"
  }

  // change color instead of intial color and count of finalColor
  for (i = 0; i < chocolates.length; i++) {
    if (chocolates[i] == color) {
      chocolates[i] = finalColor
    }
    if (chocolates[i] == finalColor) {
      number++
    }
  }

  return [number, chocolates]
}

//Challenge 1: Remove one chocolate of ____ color from the top

const removeChocolateOfColor = (chocolates, color) => {
  // Find index of color from top of the chocolates array
  let i = chocolates.indexOf(color)

  // delete element from chocolates array by index
  chocolates.splice(i, 1)

  return chocolates
}

//Challenge 2: Dispense 1 rainbow colored colored chocolate for every 3 chocolates of the same color dispensed

const dispenseRainbowChocolates = (chocolates, number) => {
  rainbowChocolates = 0

  // value of rainbowChocolates increase by 1 if 3 elements are same in row
  for (i = 0; i < number - 2; i++) {
    if (
      chocolates[i] == chocolates[i + 1] &&
      chocolates[i] == chocolates[i + 2]
    ) {
      rainbowChocolates++
    }
  }
  return rainbowChocolates
}