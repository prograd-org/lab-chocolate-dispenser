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
    if (count < 1) return 'Number cannot be zero/negative'
    for (let i = 0; i < count; i++) {
        chocolates.unshift(color)
    }
    return chocolates;
}

//Progression 2: Remove ___ chocolates from the top the dispenser
const removeChocolates = (chocolates, number,) => {
    if (number > chocolates.length) return 'Insufficient chocolates in the dispenser'
    if (number < 1) return 'Number cannot be zero/negative'
    let removed = []
    for (let i = 0; i < number; i++) {
        removed.push(chocolates.shift())
    }
    return removed;
}


//Progression 3: Dispense ___ chocolates
const dispenseChocolates = (chocolates, number) => {
    if (number > chocolates.length) return 'Insufficient chocolates in the dispenser'
    if (number < 1) return 'Number cannot be zero/negative'
    let removed = []
    for (let i = 0; i < number; i++) {
        removed.push(chocolates.pop())
    }
    return removed;
}

//Progression 4: Dispense ___ chocolates of ____ color
const dispenseChocolatesOfColor = (chocolates, number, color) => {
    if (number > chocolates.length) return 'Insufficient chocolates in the dispenser'
    if (number < 1) return 'Number cannot be zero/negative'
    let removed = []
    for (let i = 0; i < number;) {
        const ch = chocolates.pop()
        if (ch === color) {
            removed.push(ch)
            i++;
        }
    }
    return removed;
}

//Progression 5: Display ___ chocolates of each color. Return array of numbers [green, silver, blue, crimson, purple, red, pink]
const noOfChocolates = (chocolates) => {
    let count = [0, 0, 0, 0, 0, 0, 0]
    chocolates.forEach(ch => {
        if (ch === 'green') count[0]++;
        if (ch === 'silver') count[1]++;
        if (ch === 'blue') count[2]++;
        if (ch === 'crimson') count[3]++;
        if (ch === 'purple') count[4]++;
        if (ch === 'red') count[5]++;
        if (ch === 'pink') count[6]++;
    })
    return count.filter(c => c > 0);
}

//Progression 6: Sort chocolates based on count in each color. Return array of colors
const sortChocolateBasedOnCount = (chocolates) => {
    let chocolate = chocolates.reduce((temp1, temp2) => {
        if (temp2 in temp1) {
            temp1[temp2]++;
        } else {
            temp1[temp2] = 1;
        }
        return temp1;
    }, {});
    let Array = chocolates.sort((temp1, temp2) => {
        if (chocolate[temp2] > chocolate[temp1]) {
            return 1;
        }
        if (chocolate[temp2] < chocolate[temp1]) {
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
const changeChocolateColor = (chocolates, number, color, finalColor) => {
    if (number < 1) return 'Number cannot be zero/negative'
    if (color === finalColor) return "Can't replace the same chocolates"
    let count = 0;
    chocolates.forEach((ch, index) => {
        if (ch === color && count < number) {
            chocolates[index] = finalColor;
            count++;
        }
    })
    return chocolates;
}

//Progression 8: Change all chocolates of ____ color to ____ color and return [countOfChangedColor, chocolates]
const changeChocolateColorAllOfxCount = (chocolates, color, finalColor) => {
    if (color === finalColor) return "Can't replace the same chocolates"
    let count = 0;
    console.log(chocolates)
    chocolates.forEach((ch, index) => {
        if (ch === finalColor) { count++; }
        if (ch === color) {
            chocolates[index] = finalColor;
            count++;
        }
    })
    return [count, chocolates]
}

//Challenge 1: Remove one chocolate of ____ color from the top
const removeChocolateOfColor = (chocolates, color) => {
    let removed = []
    while (chocolates.length > 0) {
        const ch = chocolates.shift()
        if (ch !== color) {
            removed.push(ch)
        } else {
            break;
        }
    }
    removed.forEach(ch => chocolates.unshift(ch))
    return chocolates;
}

//Challenge 2: Dispense 1 rainbow colored colored chocolate for every 3 chocolates of the same color dispensed