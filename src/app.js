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
    "crimson"
];

//Progression 1: Add ___ chocolates of ____ color

function addChocolates(chocolates, color, count) {
    if (count <= 0) {
        return "Number cannot be zero/negative";
    } else {
        for (let i = 0; i < count; i++) {
            chocolates.unshift(color);
        }
    }
}

//Progression 2: Remove ___ chocolates from the top the dispenser

function removeChocolates(chocolates, number) {
    var removed = [];
    if (number <= 0) {
        return "Number cannot be zero/negative";
    } else if (number > chocolates.length) {
        return "Insufficient chocolates in the dispenser";
    } else {
        for (let i = 0; i < number; i++) {
            removed[i] = chocolates.shift(number);
        }
        return removed;
    }
}


//Progression 3: Dispense ___ chocolates

function dispenseChocolates(chocolates, number) {
    var eat = [];
    if (number <= 0) {
        return "Number cannot be zero/negative";
    } else if (number > chocolates.length) {
        return "Insufficient chocolates in the dispenser";
    } else {
        for (let i = 0; i < number; i++) {
            eat[i] = chocolates.pop(number);
        }

        return eat;
    }
}




//Progression 4: Dispense ___ chocolates of ____ color

function dispenseChocolatesOfColor(chocolates, number, color) {
    var eat = [];
    if (number <= 0) {
        return "Number cannot be zero/negative";
    } else if (number > chocolates.length) {
        return "Insufficient chocolates in the dispenser";
    } else {
        for (let i = 0; i < number; i++) {
            eat[i] = chocolates.pop(color);
        }

        return eat;
    }
}


//Progression 5: Display ___ chocolates of each color. Return array of numbers [green, silver, blue, crimson, purple, red, pink]



function noOfChocolates(chocolates) {
    var num = [];
    var cho = ["green", "silver", "blue", "crimson", "purple", "red", "pink"];

    for (let i = 0; i < cho.length; i++) {
        var count = 0;
        for (let j = 0; j < chocolates.length; j++) {
            if (cho[i] == chocolates[j])
                count++;
        }
        num[i] = count;
    }
    return num.filter(Number);
}









//Progression 6: Sort chocolates based on count in each color. Return array of colors

//Progression 7: Change ___ chocolates of ____ color to ____ color

//Progression 8: Change all chocolates of ____ color to ____ color and return [countOfChangedColor, chocolates]

//Challenge 1: Remove one chocolate of ____ color from the top

//Challenge 2: Dispense 1 rainbow colored colored chocolate for every 3 chocolates of the same color dispensed