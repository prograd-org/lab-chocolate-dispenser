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
    if (count <= 0) {
        return "Number cannot be zero/negative"
    }
    for (i = 0; i < count; i++) {
        chocolates.unshift(color);
    }

}


//Progression 2: Remove ___ chocolates from the top the dispenser
function removeChocolates(chocolates, number) {
    if (number > chocolates.length) {
        return "Insufficient chocolates in the dispenser";
    } else if (number < 1) {
        return "Number cannot be zero/negative";
    }

    var removedChocolates = [];

    for (i = 0; i < number; i++)
        removedChocolates[i] = (chocolates.shift());
    return removedChocolates;
}



//Progression 3: Dispense ___ chocolates

function dispenseChocolates(chocolates, number) {
    let c = [];
    if (number <= 0)
        return "Number cannot be zero/negative";
    if (number > chocolates.length)
        return "Insufficient chocolates in the dispenser";
    for (var i = 0; i < number; i++) {
        c[i] = chocolates.pop();
    }
    return c;
}



//Progression 4: Dispense ___ chocolates of ____ color

function dispenseChocolatesOfColor(chocolates, number, color) {

    if (number > chocolates.length) {
        return "Insufficient chocolates in the dispenser";
    } else if (number < 1) {
        return "Number cannot be zero/negative";
    }

    var removedChocolates = [];
    for (i = 0; i < number; i++) {

        removedChocolates[i] = chocolates.pop(color);
    }

    return removedChocolates;
}


//Progression 5: Display ___ chocolates of each color. Return array of numbers [green, silver, blue, crimson, purple, red, pink]

function noOfChocolates(chocolates) {
    var count = 0;
    var noOfChocolates = [];
    arr5 = ["green", "silver", "blue", "crimson", "purple", "red", "pink"];

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
            count = 0;
        } else {
            noOfChocolates.push(count);
        }
        count = 0;
    }
    return noOfChocolates;
}

//Progression 6: Sort chocolates based on count in each color. Return array of colors

function sortChocolateBasedOnCount(chocolates) {
    chocolates.sort(function (a, b) {
        return b - a
    });
}

//Progression 7: Change ___ chocolates of ____ color to ____ color
function changeChocolateColor(chocolates, number, color, finalColor) {
    var count = 0;
    if (chocolates.length == 0)
        return chocolates;
    if (number <= 0)
        return "Number cannot be zero/negative";

    for (var i = 0; i <= chocolates.length; i++) {
        if (chocolates[i] == finalColor)
            return "Can't replace the same chocolates";
        if (chocolates[i] == color) {
            chocolates[i] = finalColor;
            count++;
            if (count == number)
                return chocolates;

        }
    }

}


//Progression 8: Change all chocolates of ____ color to ____ color and return [countOfChangedColor, chocolates]
function changeChocolateColorAllOfxCount(chocolates, Color, finalColor) {
    if (Color == finalColor)
        return "Can't replace the same chocolates";
    else
        for (var i = chocolates.length; i >= 0; i--) {
            if (chocolates[i] == Color)
                chocolates[i] = finalColor;
        }
    var changeChocolateColorAllOfxCount = [chocolates.length, chocolates];
    return changeChocolateColorAllOfxCount;
}



//Challenge 1: Remove one chocolate of ____ color from the top


//Challenge 2: Dispense 1 rainbow colored colored chocolate for every 3 chocolates of the same color dispensed