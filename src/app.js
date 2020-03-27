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
function addChocolates(color, count){
    for (let i = 0; i < count; i++) {
        chocolates.unshift(color);
        
    }
    return chocolates;
}

//Progression 2: Remove ___ chocolates from the top the dispenser
function removeChocolates(number){
    var choco_removed = []
    for (let i = 0; i < number; i++) {
        choco_removed[i]=chocolates.shift();  
    }
    return choco_removed;
}

//Progression 3: Dispense ___ chocolates
function dispenseChocolates(number){
    var choco_removed = []
    for (let i = 0; i < number; i++) {
        choco_removed = chocolates.pop();
        
    }
    return choco_removed;

}

//Progression 4: Dispense ___ chocolates of ____ color
function dispenseChocolatesOfColor(number,color){
    var choco_rem_color =[]
    for (let i = number; i < 0; i--) {
        if (chocolates[i]==color) {
            choco_rem_color = chocolates.pop();
        }    
    }
    return choco_rem_color;
}

//Progression 5: Display ___ chocolates of each color. Return array of numbers [green, silver, blue, crimson, purple, red, pink]
function noOfChocolates(){
    var no_of_choco = [];
    var count = 0;
    choco_order = ["green", "silver", "blue", "crimson", "purple", "red", "pink"];

    for (let i = 0; i < choco_order.length; i++) {
        for (let j = 0; j < chocolates.length; j++) 
        {
            if (choco_order[i]==chocolates[j]) 
            {
                count++;
            }  
        }
        no_of_choco[i] = count; 
    }
    return no_of_choco.filter(num);
}

//Progression 6: Sort chocolates based on count in each color. Return array of colors
function sortChocolateBasedOnCount(chocolates)
{
    var col = ["green", "silver", "blue", "crimson", "purple", "red", "pink"];
    var counts = []
    for (let i = 0; i < col.length; i++) {
        var count = 0;
        for (let j = 0; j < chocolates.length; j++) {
            if (col[i]===chocolates[j]) {
                count++;   
            }
        }  
      counts.push(count);            
    }
    console.log(counts);
    var hash = [];
    for (let i = 0; i < col.length; i++)
        hash[col[i]] = counts[i];

    console.log(hash);
    /*var h = hash.sort(function(a, b){
        return a.counts-b.counts;
    })*/
    for (var key in hash) {
        if (hash.hasOwnProperty(key)) {
            console.log(key + " -> " + hash[key]);
        }
    }
    //console.log(h);
    var sortable = [];
    for (var color in hash) {
        sortable.push([color, hash[color]]);
    }

    sortable.sort(function(a, b) {
        return b[1] - a[1];
    });
    console.log(sortable);
    return sortable;
}

//Progression 7: Change ___ chocolates of ____ color to ____ color
function changeChocolateColor(chocolates, count, currentColor, finalColor)
{
    if(currentColor == finalColor){
        return "Can't replace the same chocolates";
    }
    
    else if(count>0)
    {
        for(var i = chocolates.length;i>=0;i--)
        {
            if(chocolates[i]==currentColor)
            {
                chocolates[i] = finalColor;
            }
        }
    return chocolates;
    }
    else{
        return "Number cannot be zero/negative";
    }
    
}

//Progression 8: Change all chocolates of ____ color to ____ color and return [countOfChangedColor, chocolates]

function changeChocolateColorAllOfxCount(chocolates, currentColor, finalColor)
{
    if(currentColor == finalColor)
    {
        return "Can't replace the same chocolates";
    }
    else
    {
        for(var i = chocolates.length;i>=0;i--)
    {
        if(chocolates[i]==currentColor)
        {
            chocolates[i] = finalColor;
        }
    }
    var out = [chocolates.length,chocolates];
    return out;
    }
}
//Challenge 1: Remove one chocolate of ____ color from the top


//Challenge 2: Dispense 1 rainbow colored colored chocolate for every 3 chocolates of the same color dispensed
