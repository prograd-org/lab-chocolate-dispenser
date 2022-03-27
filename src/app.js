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
function addChocolates(arrname, color, number) {
    if (number <= 0)
        return "Number cannot be zero/negative";
    for (let i = 0; i < number; i++) {
        arrname.unshift(color);
    }
    return arrname.length;
}

//Progression 2: Remove ___ chocolates from the top the dispenser
function removeChocolates(arrname, number) {
    var list = [];
    if (number > arrname.length)
        return "Insufficient chocolates in the dispenser";
    if (number <= 0)
        return "Number cannot be zero/negative";
    for (let i = 0; i < number; i++) {
        list.push(arrname.shift());
    }
    return list;
}

//Progression 3: Dispense ___ chocolates

function dispenseChocolates(arr, number) {
    var list = [];
    if (number <= 0)
        return "Number cannot be zero/negative";
    if (number > arr.length)
        return "Insufficient chocolates in the dispenser";
    else {
        for (let i = 0; i < number; i++) {
            list.push(arr.pop());
        }
    }
    return list;
}
//Progression 4: Dispense ___ chocolates of ____ color
function dispenseChocolatesOfColor(arr, num, color) {
    var list = [];
    if (num <= 0)
        return "Number cannot be zero/negative";
    if (num > arr.length)
        return "Insufficient chocolates in the dispenser";
    arr.reverse();
    for (let i = 0; i < num; i++) {
        if (arr[i] === color)
            list.push(arr[i]);
    }

    return list;
}

//Progression 5: Display ___ chocolates of each color. Return array of numbers [green, silver, blue, crimson, purple, red, pink]
function noOfChocolates(chocolates) {
    var res = [];
    var col = ["green", "silver", "blue", "crimson", "purple", "red", "pink"]
    for (let i = 0; i < col.length; i++) {
        var count = 0;
        for (let j = 0; j < chocolates.length; j++) {
            if (col[i] == chocolates[j])
                count++;
        }
        res[i] = count;
    }
    return res.filter(Number);
}

//Progression 6: Sort chocolates based on count in each color. Return array of colors

function sortChocolateBasedOnCount(chocolates) {
    let col = chocolates.reduce(function (b, a) {
        if (a in b) {
            b[a]++;
        } else {
            b[a] = 1;
        }
        return b;
    }, {});
    let Array = chocolates.sort((a, b) => {
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
function changeChocolateColor(arr, number, color, finalcolor) {
    if (arr.length === 0) {
        return [];
    }
    if (number <= 0)
        return "Number cannot be zero/negative";
    var count = 0;
    while (count < number) {
        let pos = arr.indexOf(color);
        if (color === finalcolor) {
            return "Can't replace the same chocolates";
        }
        arr.splice(pos, 1, finalcolor);
        count += 1;
    }
    return arr;
}

//Progression 8: Change all chocolates of ____ color to ____ color and return [countOfChangedColor, chocolates]

function changeChocolateColorAllOfxCount(arr, color, finalcolor) {
    if (arr.length === 0) {
        return [0, []];
    }
    var count = 0;
    if (color == finalcolor) {
        return "Can't replace the same chocolates";
    }
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === color) {
            arr[i] = finalcolor;
        }
    }
    for (let j = 0; j < arr.length; j++) {
        if (arr[j] == finalcolor)
            count += 1;
    }
    var res = [count, arr];
    return res;
}
//Challenge 1: Remove one chocolate of ____ color from the top


//Challenge 2: Dispense 1 rainbow colored colored chocolate for every 3 chocolates of the same color dispensed