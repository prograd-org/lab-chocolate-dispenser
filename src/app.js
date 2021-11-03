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



//Progression 1: Add ___ chocolates of ____ color
let addChocolates = (chocolates, color, count) => {
    if (count <= 0 || typeof count == "undefined") {
      return "Number cannot be zero/negative";
    } else {
      for (let i = 0; i < count; i++) {
        chocolates.unshift(color);
      }
    }
  };
  
  //Progression 2: Remove ___ chocolates from the top the dispenser
  let removeChocolates = (chocolates, number) => {
    if (number <= 0) {
      return "Number cannot be zero/negative";
    } else if (chocolates.length < number) {
      return "Insufficient chocolates in the dispenser";
    } else {
      let res = [];
      for (let i = 0; i < number; i++) {
        res.push(chocolates.shift());
      }
      return res;
    }
  };
  
  //Progression 3: Dispense ___ chocolates
  let dispenseChocolates = (chocolates, number) => {
    if (number <= 0) {
      return "Number cannot be zero/negative";
    } else if (chocolates.length < number) {
      return "Insufficient chocolates in the dispenser";
    } else {
      let res = [];
      for (let i = 0; i < number; i++) {
        res.push(chocolates.pop());
      }
      return res;
    }
  };
  
  //Progression 4: Dispense ___ chocolates of ____ color
  let dispenseChocolatesOfColor = (chocolates, number, color) => {
    if (number <= 0) {
      return "Number cannot be zero/negative";
    } else if (chocolates.length < number) {
      return "Insufficient chocolates in the dispenser";
    } else {
      let res = [];
      for (let i = 0; i < number; i++) {
        let choco = chocolates.pop();
        if (choco == color) {
          res.push(choco);
        }
      }
      return res;
    }
  };
  
  //Progression 5: Display ___ chocolates of each color. Return array of numbers [green, silver, blue, crimson, purple, red, pink]
  let noOfChocolates = (chocolates) => {
    let count = [];
    count.push(chocolates.filter((color) => color == "green").length);
    count.push(chocolates.filter((color) => color == "silver").length);
    count.push(chocolates.filter((color) => color == "blue").length);
    count.push(chocolates.filter((color) => color == "crimson").length);
    count.push(chocolates.filter((color) => color == "purple").length);
    count.push(chocolates.filter((color) => color == "red").length);
    count.push(chocolates.filter((color) => color == "pink").length);
    let res = [];
    for (let i = 0; i < 7; i++) {
      if (count[i] > 0) {
        res.push(count[i]);
      }
    }
    return res;
  };
  
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
  let changeChocolateColor = (chocolates, number, color, finalColor) => {
    if (number <= 0) {
      return "Number cannot be zero/negative";
    } else if (color == finalColor) {
      return "Can't replace the same chocolates";
    } else {
      for (let i = 0; i < chocolates.length; i++) {
        if (chocolates[i] == color) {
          chocolates[i] = finalColor;
          number--;
        }
        if (number == 0) {
          break;
        }
      }
      return chocolates;
    }
  };
  
  //Progression 8: Change all chocolates of ____ color to ____ color and return [countOfChangedColor, chocolates]
  let changeChocolateColorAllOfxCount = (chocolates, color, finalColor) => {
    if (color == finalColor) {
      return "Can't replace the same chocolates";
    }
    let count = 0;
  
    chocolates.forEach((element, i) => {
      if (element == color || element == finalColor) {
        chocolates[i] = finalColor;
        count++;
      }
    });
    console.log(chocolates);
    return [count, chocolates];
  };
  
  //Challenge 1: Remove one chocolate of ____ color from the top
  
  //Challenge 2: Dispense 1 rainbow colored colored chocolate for every 3 chocolates of the same color dispensed
