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
    if (count > 0) {
        for (let i = 0; i < count; i++) {
            chocolates.unshift(color);
        }
    } else {
        return 'Number cannot be zero/negative';
    }
}




//Progression 2: Remove ___ chocolates from the top the dispenser

function removeChocolates(chocolates, number) {
    var dis = [];


    if (number > chocolates.length)
        return 'Insufficient chocolates in the dispenser';
    else if (number > 0) {
        for (let i = 0; i < number; i++) {
            dis[i] = chocolates.shift();
        }
        return dis;
    } else {
        return 'Number cannot be zero/negative';
    }


}







//Progression 3: Dispense ___ chocolates

function dispenseChocolates(chocolates, number) {
    var dis = [];


    if (number > chocolates.length)
        return 'Insufficient chocolates in the dispenser';
    else if (number > 0) {
        for (let i = 0; i < number; i++) {
            dis[i] = chocolates.pop();
        }
        return dis;
    } else {
        return 'Number cannot be zero/negative';
    }

}


//Progression 4: Dispense ___ chocolates of ____ color

function dispenseChocolatesOfColor(chocolates, number, color) {
    var count = 0;
    var dis = [];
    if (number > chocolates.length)
        return 'Insufficient chocolates in the dispenser';
    else if (number > 0) {

        for (let i = chocolates.length; i >= 0; i--) {
            if (color == chocolates[i])

            {
                dis[count++] = chocolates.pop();

            }
            if (count == number) {
                break;
            }
        }
        return dis;
    } else {
        return 'Number cannot be zero/negative';
    }

}



//Progression 5: Display ___ chocolates of each color. Return array of numbers [green, silver, blue, crimson, purple, red, pink]

function noOfChocolates(chocolates) {
    var dis = [];
    var cho = ["green", "silver", "blue", "crimson", "purple", "red", "pink"]

    for (let i = 0; i < cho.length; i++) {
        var count = 0;
        for (let j = 0; j < chocolates.length; j++) {
            if (cho[i] == chocolates[j])
                count++;
        }
        dis[i] = count;
    }
    return dis.filter(Number);
}

//Progression 6: Sort chocolates based on count in each color. Return array of colors

function sortChocolateBasedOnCount(chocolates) {
    let cho = chocolates.reduce(function(temp1, temp2) {
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
        if (temp1 < temp2) {
            return -1;
        }
    });
    chocolates = Array;
}



//Progression 7: Change ___ chocolates of ____ color to ____ color

function changeChocolateColor(chocolates, count, color, lastColor) {
    if (color == lastColor) {
        return "Can't replace the same chocolates";
    } else if (count > 0) {
        for (let i = 0; i < chocolates.length; i++) {
            if (chocolates[i] == color) {
                chocolates[i] = lastColor;
            }

        }
        return chocolates;
    } else {
        return 'Number cannot be zero/negative';
    }
}


//Progression 8: Change all chocolates of ____ color to ____ color and return [countOfChangedColor, chocolates]

function changeChocolateColorAllOfxCount(chocolates, color, finalColor) {
    if (color == finalColor) {
        return "Can't replace the same chocolates";
    } else {
        let count = 0;
        console.log(chocolates, color, finalColor)
        for (var i = 0; i < chocolates.length; i++) {
            if (chocolates[i] == color) {

                chocolates[i] = finalColor;
                count++;
            }
        }
        return [chocolates.filter(x => x == finalColor).length, chocolates];
    }
}


//Challenge 1: Remove one chocolate of ____ color from the top


//Challenge 2: Dispense 1 rainbow colored colored chocolate for every 3 chocolates of the same color dispensed