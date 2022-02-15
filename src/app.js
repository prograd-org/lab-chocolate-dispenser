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

function addChocolates(chocolates, color, count) {

    if(count < 1) {
        return "Number cannot be zero/negative";
    }

    for(let i=0; i<count; i++) {
        chocolates.unshift(color);
    }

}

//Progression 2: Remove ___ chocolates from the top the dispenser

function removeChocolates(chocolates, number) {
    let res = [];

    if(number > chocolates.length) {
        return "Insufficient chocolates in the dispenser";
    } else if(number < 1) {
        return "Number cannot be zero/negative";
    } else {
        for(let i=0; i<number; i++) {
            res.push(chocolates.shift());
        }
        return res;
    }
}

//Progression 3: Dispense ___ chocolates

function dispenseChocolates(chocolates, number) {
    let ans = [];


    if(number > chocolates.length) {
        return "Insufficient chocolates in the dispenser";
    } else if(number < 1) {
        return "Number cannot be zero/negative";
    } else {
        for(let i=0; i<number; i++) {
            ans.push(chocolates.pop());
        }
        return ans;
    }

    

}

//Progression 4: Dispense ___ chocolates of ____ color

function dispenseChocolatesOfColor(chocolates, number, color) {
    let ans = [];

    if(number > chocolates.length) {
        return "Insufficient chocolates in the dispenser";
    } else if(number < 1) {
        return "Number cannot be zero/negative";
    } else {
        for(let i=0; i<number; i++) {
            ans.push(chocolates.pop(color));
        }
        return ans;
    }
}

//Progression 5: Display ___ chocolates of each color. Return array of numbers [green, silver, blue, crimson, purple, red, pink]

function noOfChocolates(chocolates) {
    let green = 0, silver = 0, blue = 0, crimson = 0, purple = 0, red = 0, pink = 0;
    let noOfColor = [];

    for(let i=0; i<chocolates.length; i++) {
        if(chocolates[i] == "green") 
            green++;
        else if(chocolates[i] == "silver") {
            silver++;
        }else if(chocolates[i] == "blue") {
            blue++;
        }else if(chocolates[i] == "crimson") {
            crimson++;
        }else if(chocolates[i] == "purple") {
            purple++;
        }else if(chocolates[i] == "red") {
            red++;
        }else if(chocolates[i] == "pink") {
            pink++;
        }
    }

    if(green != 0)
        noOfColor.push(green);
    if(silver != 0)
        noOfColor.push(silver);
    if(blue != 0) 
        noOfColor.push(blue);
    if(crimson != 0)
        noOfColor.push(crimson);
    if(purple != 0)
        noOfColor.push(purple);
    if(red != 0)
        noOfColor.push(red);
    if(pink != 0)
        noOfColor.push(pink);
    // console.log(noOfColor)
    
    return noOfColor;


}

//Progression 6: Sort chocolates based on count in each color. Return array of colors
let color = ["green", "silver", "blue", "crimson", "purple", "red", "pink"];

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
    let res = chocolates;
    let count = 0;

    if(color == finalColor) {
        return "Can't replace the same chocolates";
    } else if(number > 0) {
        for(let i = 0; i<res.length; i++) {
            if(res[i] == color && count <= number) {
                res[i] = finalColor;
                count++;
            }
        }
        return res;
    } else {
        return "Number cannot be zero/negative";
    }
    
};

//Progression 8: Change all chocolates of ____ color to ____ color and return [countOfChangedColor, chocolates]

function changeChocolateColorAllOfxCount(chocolates, color, finalColor) {
    let count = 0;

    if(color == finalColor) {
        return "Can't replace the same chocolates";
    } else if(color != finalColor) {
        for(let i=0; i<=chocolates.length; i++) {
            if(chocolates[i] == color) {
                chocolates[i] = finalColor;
            }
        }
        for(let i=0; i<=chocolates.length; i++) {
            if(chocolates[i] == finalColor) {
                count++;
            }
        }
        return [count, chocolates];

    }
}