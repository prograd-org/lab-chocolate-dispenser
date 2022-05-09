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
function addChocolates(chocolates,color,count){
    if(count <= 0){
        return 'Number cannot be zero/negative'
    }
    for(let i=1;i<=count;i++){
        chocolates.unshift(color)
    }
}



//Progression 2: Remove ___ chocolates from the top the dispenser
function removeChocolates(chocolates,number){
    if(number <= 0){
        return 'Number cannot be zero/negative'
    }
    if(number > chocolates.length){
        return 'Insufficient chocolates in the dispenser'
    }
    let arr = [];
    for(let i=1;i<=number;i++){
        arr.push(chocolates.shift())
    }
    return arr
}


//Progression 3: Dispense ___ chocolates
function dispenseChocolates(chocolates,number){
    if(number <= 0){
        return 'Number cannot be zero/negative'
    }
    if(number > chocolates.length){
        return 'Insufficient chocolates in the dispenser'
    }
    let arr = [];
    for(let i=1;i<=number;i++){
        arr.push(chocolates.pop())
    }
    return arr
}


//Progression 4: Dispense ___ chocolates of ____ color
function dispenseChocolatesOfColor(chocolates,number,color){
    if(number <= 0){
        return 'Number cannot be zero/negative'
    }
    if(number > chocolates.length){
        return 'Insufficient chocolates in the dispenser'
    }
    let arr = []
    let count = 0
    for(let i = chocolates.length-1;i>=0;i--){
        if(chocolates[i] == color){
            chocolates.splice(i,1)
            count++
            arr.push(color)
        }
        if(count==number){
            break;
        }
    }
    return arr
}


//Progression 5: Display ___ chocolates of each color. Return array of numbers [green, silver, blue, crimson, purple, red, pink]
function noOfChocolates(chocolates){
    if(chocolates.length == 0){
        return []
    }
    let arr = [0,0,0,0,0,0,0]
    for(let i=0;i<chocolates.length;i++){
        if(chocolates[i] == 'green'){
            arr[0]++
        }
        else if(chocolates[i] == 'silver'){
            arr[1]++
        }
        else if(chocolates[i] == 'blue'){
            arr[2]++
        }
        else if(chocolates[i] == 'crimson'){
            arr[3]++
        }
        else if(chocolates[i] == 'purple'){
            arr[4]++
        }
        else if(chocolates[i] == 'red'){
            arr[5]++
        }
        else if(chocolates[i] == 'pink'){
            arr[6]++
        }
    }
    for(let i=0;i<arr.length;i++){
        if(arr[i]===0){
            arr.splice(i,1)
            i--
        }
    }
    return arr
}



//Progression 6: Sort chocolates based on count in each color. Return array of colors
function sortChocolateBasedOnCount(chocolates){
    let count = noOfChocolates(chocolates);
    let max = -1;
    let pos = -1;
    let arr = []
    while(max != 0){
        max = -1;
        pos = -1;
        for(let i=0; i<count.length; i++){
            if(max<count[i]){
                max = count[i]
                pos = i;
            }
        }
        count[pos] = 0;
        if(pos == 0){
            for(let i=0;i<count;i++){
                arr.push('green')
            }
        }
        else if(pos == 1){
            for(let i=0;i<count;i++){
                arr.push('silver')
            }
        }
        else if(pos == 2){
            for(let i=0;i<count;i++){
                arr.push('blue')
            }
        }
        else if(pos == 3){
            for(let i=0;i<count;i++){
                arr.push('crimson')
            }
        }
        else if(pos == 4){
            for(let i=0;i<count;i++){
                arr.push('purple')
            }
        }
        else if(pos == 5){
            for(let i=0;i<count;i++){
                arr.push('red')
            }
        }
        else if(pos == 6){
            for(let i=0;i<count;i++){
                arr.push('pink')
            }
        }
    }
    return  arr
}


//Progression 7: Change ___ chocolates of ____ color to ____ color
function changeChocolateColor(chocolates,number,color,finalColor){
    if(number <= 0){
        return 'Number cannot be zero/negative'
    }
    if(color == finalColor){
        return "Can't replace the same chocolates"
    }
    let count = 0;
    for(let i=0; i<chocolates.length;i++){
        if(chocolates[i] == color){
            chocolates[i] = finalColor;
            count++
        }
        if(count >= number){
            break
        }
    }
    return chocolates
}


//Progression 8: Change all chocolates of ____ color to ____ color and return [countOfChangedColor, chocolates]
function changeChocolateColorAllOfxCount(chocolates,color,finalColor){
    
    if(color == finalColor){
        return "Can't replace the same chocolates"
    }
    let count = 0;
    for(let i=0; i<chocolates.length;i++){
        if(chocolates[i] == color){
            chocolates[i] = finalColor;
            
        }
        if(chocolates[i] == finalColor){
            count++
        }
    }
    return [count, chocolates]
}


//Challenge 1: Remove one chocolate of ____ color from the top


//Challenge 2: Dispense 1 rainbow colored colored chocolate for every 3 chocolates of the same color dispensed
