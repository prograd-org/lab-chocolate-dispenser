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
function addChocolates(chocolates,color, count)
{
    if(count<=0)
    return 'Number cannot be zero/negative';
    for(var i=0;i<count;i++)
    chocolates.unshift(color);
    return chocolates;
}
//Progression 2: Remove ___ chocolates from the top the dispenser
function removeChocolates(chocolates,number){
    var removed=[];
    if(number<=0)
        return 'Number cannot be zero/negative';
    else if(number>chocolates.length)
        return 'Insufficient chocolates in the dispenser';
    else{
        for(var i=0;i<number;i++)
        removed[i]=chocolates.shift();}
    return removed;
}

//Progression 3: Dispense ___ chocolates
function dispenseChocolates(chocolates,number){
    var dispensed=[];
    if(number<=0)
        return 'Number cannot be zero/negative';
    else if(number>chocolates.length)
        return 'Insufficient chocolates in the dispenser';
    else{
        for(var i=0;i<number;i++)
        dispensed[i]=chocolates.pop();}
    return dispensed;
}

//Progression 4: Dispense ___ chocolates of ____ color
function dispenseChocolatesOfColor(chocolates,number, color){
    var dispensed=[],count=0;
    if(number<=0)
        return 'Number cannot be zero/negative';
    else if(number>chocolates.length)
        return 'Insufficient chocolates in the dispenser';
    else{
        for(var i=(chocolates.length-1);i>=0;i--){
            if(count<number && color==chocolates[i]){
             dispensed[count]=chocolates.pop();
             count++;}}}
    return dispensed;
}

//Progression 5: Display ___ chocolates of each color. Return array of numbers [green, silver, blue, crimson, purple, red, pink]
function noOfChocolates(chocolates)
{
    let count=[],j=0, obj={};
    for(let i of chocolates){
       if(!obj[i])
    {obj[i]=1;}
    else{
      obj[i]++;
    }
    }
     for(let i in obj){
         count[j]=obj[i];
         j++;
    
     }
    return count;
  }

//Progression 6: Sort chocolates based on count in each color. Return array of colors
function sortChocolateBasedOnCount(chocolates) {
    let col = chocolates.reduce(function(b, a) {
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
function changeChocolateColor(chocolates,number, color, finalColor)
 {
    if (chocolates.length === 0) {
        return [];
    }
    if (number <= 0)
        return "Number cannot be zero/negative";
    var count = 0;
    while (count < number) {
        let pos = chocolates.indexOf(color);
        if (color === finalColor) {
            return "Can't replace the same chocolates";
        }
        chocolates.splice(pos, 1, finalColor);
        count += 1;
    }
    return chocolates;
}
//Progression 8: Change all chocolates of ____ color to ____ color and return [countOfChangedColor, chocolates]
function changeChocolateColorAllOfxCount(chocolates, color, finalcolor) {
    if (chocolates.length === 0) {
        return [0, []];
    }
    var count = 0;
    if (color == finalcolor) {
        return "Can't replace the same chocolates";
    }
    for (let i = 0; i < chocolates.length; i++) {
        if (chocolates[i] === color) {
            chocolates[i] = finalcolor;
        }
    }
    for (let j = 0; j < chocolates.length; j++) {
        if (chocolates[j] == finalcolor)
            count += 1;
    }
    var res = [count, chocolates];
    return res;
}
//Challenge 1: Remove one chocolate of ____ color from the top


//Challenge 2: Dispense 1 rainbow colored colored chocolate for every 3 chocolates of the same color dispensed