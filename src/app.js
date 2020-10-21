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
const addChocolates = (chocolates,color, count) => {
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
    else {
        for (var i = 0; i < number; i++) {
            removed_chocs[i] = chocolates.shift();
        }
        return removed_chocs;
    }
};


//Progression 3: Dispense ___ chocolates
const dispenseChocolates = (chocolates, number) => {
    let dispense_chocs = [];
    if (number <= 0)
    return "Number cannot be zero/negative";
    else if (number > chocolates.length)
    return "Insufficient chocolates in the dispenser";
    else {
        for (let i = 0; i < number; i++) {
            dispense_chocs[i] = chocolates.pop();
        }
    return dispense_chocs;
    }
} ;


//Progression 4: Dispense ___ chocolates of ____ color
const dispenseChocolatesOfColor = (chocolates, number, color) => {
    let dispenseChocolatesOfColor = [];
    if (chocolates.length < number)
        return "Insufficient chocolates in the dispenser";
    if (number <= 0)
        return "Number cannot be zero/negative";
    
    let dispensedNumber = 0;
    for (let i = chocolates.length -1; i >=0; i--) {
        if (chocolates[i] == color) {
            dispenseChocolatesOfColor.push(chocolates.pop());
            dispensedNumber++;
            if(dispensedNumber == number)
            return dispenseChocolatesOfColor;
        }
    }
    if (dispensedNumber != number)
    return "Insufficient chocolates in the dispenser";
};


//Progression 5: Display ___ chocolates of each color. Return array of numbers [green, silver, blue, crimson, purple, red, pink]
function noOfChocolates(chocolates) {
    var res = [];
    var col = ["green", "silver", "blue", "crimson", "purple", "red", "pink"]
    for (let i = 0; i< col.length; i++) {
        var count= 0;
        for(let j = 0; j< chocolates.length; j++) {
            if (col[i] == chocolates[j])
            count++;
        }
        res[i] = count;
    }
    return res.filter(Number);
}

//Progression 6: Sort chocolates based on count in each color. Return array of colors

function sortChocolateBasedOnCount(chocolates) {
    let col = chocolates.reduce(function (b,a) {
        if (a in b) {
            b[a]++;
        } else {
            b[a] = 1;
        }
        return b;
    }, {});

    let Array = chocolates.sort ((a, b) => {
        if (col[b] > col[a]) {
            return 1;
        }
        if (col[b] < col[a]) {
            return -1;
        }
        if (a > b) {
            return 1;
        }
        if (a < b) {
            return -1;
        }
    });
    chocolates = Array;
}
    
//Progression 7: Change ___ chocolates of ____ color to ____ color
function changeChocolateColor(chocolates, count, color, finalColor) {
    if(color == finalColor)
    {
        return "Can't replace the same chocolates";
    }
    else if(count > 0)
    {
        for(let i=0; i<chocolates.length;i++)
        {
            if(chocolates[i] == color){
                chocolates[i] = finalColor
            }
        }
        return chocolates;
    } else {
        return "Number cannot be zero/negative";
    }
}

//Progression 8: Change all chocolates of ____ color to ____ color and return [countOfChangedColor, chocolates]
function changeChocolateColorAllOfxCount (chocolates, Color, finalColor) {
    if (Color == finalColor)
    return "Can't replace the same chocolates";
    else
        var i = 0;
        do{
            if(chocolates[i] == Color )
            chocolates[i] = finalColor;
            i++;
        }while(i <= chocolates.length);
        var chocs = [chocolates.length, chocolates];
        return chocs;
}


//Challenge 1: Remove one chocolate of ____ color from the top


//Challenge 2: Dispense 1 rainbow colored colored chocolate for every 3 chocolates of the same color dispensed
