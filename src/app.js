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

let addChocolates = (chocolates,color, count) =>{
    if(count>0)
    {
        for(var i=0;i<count;i++)
        chocolates.unshift(color);
    }
    else
    {
        return "Number cannot be zero/negative";
    }
};

//Progression 2: Remove ___ chocolates from the top the dispenser

let removeChocolates = (chocolates,number) => {
    var arr=[];
    if(number<=0)
    {
        return "Number cannot be zero/negative";
    }
    else if(number > chocolates.length)
        {
            return "Insufficient chocolates in the dispenser";
        }
        else{
            for(var i=0;i<number;i++)
            arr.push(chocolates.shift());
        }
        return arr;
};


//Progression 3: Dispense ___ chocolates
let dispenseChocolates = (chocolates,number) => {
    var arr=[];
    if(number<=0)
    {
        return "Number cannot be zero/negative";
    }
    else if(number > chocolates.length)
        {
            return "Insufficient chocolates in the dispenser";
        }
        else{
            for(var i=0;i<number;i++)
            arr.push(chocolates.pop());
        }
        return arr;
};

//Progression 4: Dispense ___ chocolates of ____ color

let dispenseChocolatesOfColor = (chocolates,number, color) =>{
    var arr=[];
    if(number<=0)
    {
        return "Number cannot be zero/negative";
    }
    else if(number > chocolates.length)
        {
            return "Insufficient chocolates in the dispenser";
        }
        else{
            for(var i=chocolates.length;i>=0;i--)
            {
                if(color == chocolates[i])
                 arr.push(chocolates.pop());
            }
        }
        return arr;
}

//Progression 5: Display ___ chocolates of each color. Return array of numbers [green, silver, blue, crimson, purple, red, pink]

let noOfChocolates = (chocolates) =>{
    var c=0,total=[],s;
    var color=["green", "silver", "blue", "crimson", "purple", "red", "pink"];
    while(c < color.length)
    {
        s=0;
        for(var i=0;i<chocolates.length;i++)
        {
            if(color[c]==chocolates[i])
            {
                total[c]=++s;
            }
        }
        c=c+1;
    }
    return total.filter(Number);
}

//Progression 6: Sort chocolates based on count in each color. Return array of colors
let sortChocolateBasedOnCount = (chocolates) =>{
    var c=0,total=[],s;
    var color=["green", "silver", "blue", "crimson", "purple", "red", "pink"];
    while(c < color.length)
    {
        s=0;
        for(var i=0;i<chocolates.length;i++)
        {
            if(color[c]==chocolates[i])
            {
                total[c]=++s;
            }
        }
        c=c+1;
    }
    return total.sort(function(a,b){return b-a});
}

//Progression 7: Change ___ chocolates of ____ color to ____ color

let changeChocolateColor = (chocolates,number, color, finalColor) =>{
    if(color == finalColor)
    {
        return "Can't replace the same chocolates";
    }
    else if(number > 0)
    {
        for(var i=chocolates.length;i>=0;i--)
        {
            if(chocolates[i]==color)
            {
                chocolates[i]=finalColor;
            }
        }
        return chocolates;
    }
    else{
        return "Number cannot be zero/negative";
    }
}


//Progression 8: Change all chocolates of ____ color to ____ color and return [countOfChangedColor, chocolates]

let changeChocolateColorAllOfxCount = (chocolates,color,finalColor) => {
    if(color == finalColor)
    {
        return "Can't replace the same chocolates";
    }
    else
    {
        for(var i = chocolates.length;i>=0;i--)
        {
            if(chocolates[i]==color)
            {
                chocolates[i] = finalColor;
            }
        }
    }
    var count = chocolates.filter(function(d){return d==finalColor}).length;
    var changedcolor=[count,chocolates];
    return changedcolor;
}

//Challenge 1: Remove one chocolate of ____ color from the top


//Challenge 2: Dispense 1 rainbow colored colored chocolate for every 3 chocolates of the same color dispensed
