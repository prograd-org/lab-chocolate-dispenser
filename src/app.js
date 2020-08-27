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
function addChocolates(chocolates, color, count)
{
    if(count<1)
    {
        return 'Number cannot be zero/negative'
    }
    else
    for(i=0;i<count;i++)
    {
        chocolates.unshift(color)
    }
    return chocolates
}


//Progression 2: Remove ___ chocolates from the top the dispenser

function removeChocolates(chocolates, number) {
    var removeChocolate = []

    if(number<1)
    {
        return "Number cannot be zero/negative";
    }
    else if(number>chocolates.length)
    {
        return "Insufficient chocolates in the dispenser";
    }
    else
    { 
        for( i=0;i<number;i++)
        {
            removeChocolate.push(chocolates.shift());
        }
        return removeChocolate;
    }
    
}

//Progression 3: Dispense ___ chocolates

function dispenseChocolates(chocolates, number) {
    var dispense = []
    if (number <= 0)
    {
        return "Number cannot be zero/negative";
    }

    else if (number > chocolates.length)
    {
        return "Insufficient chocolates in the dispenser";
    }

    else
    {
        for (i = 0; i < number; i++) {
            dispense[i] = chocolates.pop()
        }
        return dispense;
    }

}


//Progression 4: Dispense ___ chocolates of ____ color

function dispenseChocolatesOfColor(chocolates, number, color)
{
    var chocolateColor=[]
    if (number <= 0) {
        return "Number cannot be zero/negative";
    }

    else if (number > chocolates.length) {
        return "Insufficient chocolates in the dispenser";
    }

    else
    {
      for(i=0;i<number;i++)
      {
         chocolateColor.push(chocolates.pop(color)) 
      }
    return chocolateColor
    }

}


//Progression 5: Display ___ chocolates of each color. Return array of numbers [green, silver, blue, crimson, purple, red, pink]

function noOfChocolates(chocolates) {
    var count = 0;
    var noOfChocolates = [];
    arr5 = ["green", "silver", "blue", "crimson", "purple", "red", "pink"];
    if (chocolates.length <= 0) 
    {
        return [];
    }
    for (j = 0; j < arr5.length; j++) 
    {
        for (i = 0; i < chocolates.length; i++) 
        {
            if (arr5[j] == chocolates[i]) 
            {
                count++;
            }
        }
        if (count == 0) 
        {
            count = 0;
        } 
        else 
        {
            noOfChocolates.push(count);
        }
        count = 0;
    }
    return noOfChocolates;
}

//Progression 6: Sort chocolates based on count in each color. Return array of colors

function sortChocolateBasedOnCount(chocolate)
{

}


//Progression 7: Change ___ chocolates of ____ color to ____ color

function changeChocolateColor(chocolates, number, color, finalColor) {

    if (number <= 0) 
    {
        return "Number cannot be zero/negative";
    }
    if (color == finalColor) 
    {
        return "Can't replace the same chocolates";
    }
    for (i = 0; i < chocolates.length; i++) {
        if (chocolates[i] == color && number > 0) {
            chocolates[i] = finalColor;
            number--;
        }
    }
    return chocolates;
}


//Progression 8: Change all chocolates of ____ color to ____ color and return [countOfChangedColor, chocolates]

function changeChocolateColorAllOfxCount(chocolates, color, finalColor)
{
    var countOfFinalColorChocolates=0
    if (color == finalColor) 
    {
        return "Can't replace the same chocolates";
    }

    for(i=0;i<chocolates.length;i++)
    {
        if(chocolates[i]==color)
        {
            chocolates[i]=finalColor
        }
        if(chocolates[i]==finalColor)
        {
            countOfFinalColorChocolates+=1
        }
    }
    return [countOfFinalColorChocolates,chocolates]
}

//Challenge 1: Remove one chocolate of ____ color from the top

function colorChocloate(chocolates,color)
{
    for (i=0;i<chocolates.length;i++)
    {
        if(chocolates[i]==color)
        {
            chocolates.pop(chocolates[i])
        }
    }
}

//Challenge 2: Dispense 1 rainbow colored colored chocolate for every 3 chocolates of the same color dispensed

function dispenseRainbowChocolates(chocolates,number)
{
    rainbowChocolate=0;

    for(i=0;i<number;i++)
    {
        if(chocolate[i] == chocolates[i+1] && chocolates[i] == chocolates[i+2])
        {
            rainbowChocolate+=1
        }
    }
    return rainbowChocolate
}