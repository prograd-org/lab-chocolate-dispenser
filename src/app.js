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
    if (count < 1) {
        return 'Number cannot be zero/negative'
    }
    for (let i = 0; i < count; i++) {
        chocolates.unshift(color)
    }
    return chocolates
}

//Progression 2: Remove ___ chocolates from the top the dispenser

const removeChocolates = (chocolates, number) => {
    let removeArr = []
    if (chocolates.length < number) {
        return "Insufficient chocolates in the dispenser";
    }

    if (number < 1) {
        return "Number cannot be zero/negative";
    }
    for (let i = 0; i < number; i++) {
        removeArr.push(chocolates.shift())
    }
    return removeArr
}


//Progression 3: Dispense ___ chocolates
let dispenseChocolates = (chocolates, number) => {
    let arr = []
    if (chocolates.length < number) {
        return "Insufficient chocolates in the dispenser";
    }

    if (number < 1) {
        return "Number cannot be zero/negative";
    }
    for (let i = 0; i < number; i++) {
        arr.push(chocolates.pop())
    }
    return arr
}

//Progression 4: Dispense ___ chocolates of ____ color
let dispenseChocolatesOfColor = (chocolates, number, color) => {
    let arr = []
    let count = 0
    if (chocolates.length < number) {
        return "Insufficient chocolates in the dispenser";
    }
    if (number <= 0) return "Number cannot be zero/negative";

    for (let i = chocolates.length - 1; i >= 0; i--) {
        if (chocolates[i] == color) {
            arr.push(chocolates.pop())
            count++
            if (count == number) return (arr)
        }

    }
    if (count != number)
        return "Insufficient chocolates in the dispenser";
}

//Progression 5: Display ___ chocolates of each color. Return array of numbers [green, silver, blue, crimson, purple, red, pink]

const noOfChocolates = (chocolates) => {
    let inOrderChocolates = [
        "green",
        "silver",
        "blue",
        "crimson",
        "purple",
        "red",
        "pink",
    ]

    let uniqueColor = {}

    chocolates.forEach((color) => {
        if (!(color in uniqueColor)) {
            uniqueColor[`${color}`] = 0
        }
        uniqueColor[`${color}`]++
    });


    let chocolateCount = []
    inOrderChocolates.forEach((color) => {
        if (color in uniqueColor) {
            chocolateCount.push(uniqueColor[`${color}`])
        }
    });
    return chocolateCount
}

//Progression 6: Sort chocolates based on count in each color. Return array of colors

let sortChocolateBasedOnCount = (chocolates) => {
    let uniqueColors = {}


    chocolates.forEach((color) => {
        if (!(color in uniqueColors)) {
            uniqueColors[`${color}`] = 0
        }
        uniqueColors[`${color}`]++
    });


    let sortedChocolates = Object.entries(uniqueColors)
        .sort()
        .sort((a, b) => b[1] - a[1])


    chocolates.length = 0

    sortedChocolates.forEach((item) => {
        for (let i = 1; i <= item[1]; i++) {
            chocolates.push(item[0])
        }
    });

    return chocolates
}
//Progression 7: Change ___ chocolates of ____ color to ____ color
let changeChocolateColor = (chocolates, number, color, finalColor) => {
    if (number <= 0) {
        return "Number cannot be zero/negative"
    }


    if (color == finalColor) {
        return "Can't replace the same chocolates"
    }

    chocolates.forEach((chocolateColor, index) => {
        if (chocolateColor == color && number > 0) {
            chocolates[index] = finalColor
            number--
        }
    });
    return chocolates

}

//Progression 8: Change all chocolates of ____ color to ____ color and return [countOfChangedColor, chocolates]
let changeChocolateColorAllOfxCount = (chocolates, color, finalColor) => {
    if (color == finalColor) {
        return "Can't replace the same chocolates"
    }

    // change color instead of intial color and count of finalColor
    chocolates.forEach((chocolateColor, index) => {
        if (chocolateColor == color) {
            chocolates[index] = finalColor
        }
    })

    return [chocolates.length, chocolates]
}




//Challenge 1: Remove one chocolate of ____ color from the top

let removeChocolateOfColor = (chocolates, color) => {
    return chocolates.slice(chocolates.indexOf(color), 1)
}
//Challenge 2: Dispense 1 rainbow colored colored chocolate for every 3 chocolates of the same color dispensed
let dispenseRainbowChocolates = (number) => {
    let rainbowChocolates = 0
    let colorCount = {}

    for (let i = 0; i < number; i++) {
        if (!(chocolates[i] in colorCount)) colorCount[chocolates[i]] = 0;
        colorCount[chocolates[i]]++
    }

    for (let chocolate in colorCount) {
        if (colorCount[chocolate] >= 3)
            rainbowChocolates += Math.floor(colorCount[chocolate] / 3)
    }
    console.log(colorCount)
    return rainbowChocolates
}