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

const addChocolates = (chocolates, color, count) => {
    if (count < 1) {
    return "Number cannot be zero/negative";
    }
    for (let i = 0; i < count; i++) {
      chocolates.unshift(color);
    }
  };
//Progression 2: Remove ___ chocolates from the top the dispenser

const removeChocolates = (chocolates, number) => {
    let removed_chocs = [];
    if (chocolates.length < number) {
      return "Insufficient chocolates in the dispenser";
    }
    else if (number < 1) {
      return "Number cannot be zero/negative";
    }
    else{
        for (var i = 0; i < number; i++) {
            removed_chocs[i] = chocolates.shift();
          }
          return removed_chocs;
    }
  };
//Progression 3: Dispense ___ chocolates

const dispenseChocolates = (chocolates, number) => {
    let dispense_Chocs = [];
    if (number <= 0) 
    return "Number cannot be zero/negative";
    else if (number > chocolates.length)
    return "Insufficient chocolates in the dispenser";
    else{
    for (let i = 0; i < number; i++) {
        dispense_Chocs[i]=chocolates.pop();
    }
    return dispense_Chocs;
    }
  };
  

//Progression 4: Dispense ___ chocolates of ____ color

const dispenseChocolatesOfColor = (chocolates, number, color) => {
    let dispensedChocolatesColor = [];
    
    if (chocolates.length < number)
        return "Insufficient chocolates in the dispenser";
    if (number <= 0) 
        return "Number cannot be zero/negative";
        
    let dispensedNumber = 0;
    for (let i = chocolates.length - 1; i >= 0; i--) {
      if (chocolates[i] == color) {
        dispensedChocolatesColor.push(chocolates.pop());
        dispensedNumber++;
        if (dispensedNumber == number) 
        return dispensedChocolatesColor;
      }
    }
    if (dispensedNumber != number)
      return "Insufficient chocolates in the dispenser";
  };
//Progression 5: Display ___ chocolates of each color. Return array of numbers [green, silver, blue, crimson, purple, red, pink]
function noOfChocolates(chocolates) {

    let chocs = [];
    for (let i = 0; i < chocolates.length; i++) {
        if (chocolates[i] !== 0) {
            let count = 1;
            for (let j = i + 1; j < chocolates.length; j++) {
                if (chocolates[i] == chocolates[j]) {
                    count++;
                    chocolates[j] = 0;
                }
            }
            chocs.push(count);
        }
    }
    return chocs;
}

//Progression 6: Sort chocolates based on count in each color. Return array of colors

const sortChocolateBasedOnCount = (chocolates) => {
        let uniqueColors = {};
  
        chocolates.forEach((color) => {
      if (!(color in uniqueColors)) {
        uniqueColors[`${color}`] = 0;
      }
      uniqueColors[`${color}`]++;
    });
  
    let sortedChocolates = Object.entries(uniqueColors)
      .sort()
      .sort((a, b) => b[1] - a[1]);
  
    
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
    
    if (number <= 0)
      return "Number cannot be zero/negative";
    if (color == finalColor)
      return "Can't replace the same chocolates";
    
  
    chocolates.forEach((chocolateColor, index) => {
      if (chocolateColor == color && number > 0) {
        chocolates[index] = finalColor;
        number--;
      }
    });
    return chocolates;
  };
//Progression 8: Change all chocolates of ____ color to ____ color and return [countOfChangedColor, chocolates]
function changeChocolateColorAllOfxCount(chocolates, Color, finalColor) {
    if (Color == finalColor)
        return "Can't replace the same chocolates";
    else
        var i = 0;
        do{
            if (chocolates[i] == Color)
                chocolates[i] = finalColor;
        i++;
    }while(i <= chocolates.length);
    var chocs = [chocolates.length, chocolates];
    return chocs;
}

//Challenge 1: Remove one chocolate of ____ color from the top


//Challenge 2: Dispense 1 rainbow colored colored chocolate for every 3 chocolates of the same color dispensed
