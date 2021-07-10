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
function addChocolates(chocolates, color, count){
if (count>0)
{
    for (var i =0; i < count; i++)
    {
    chocolates.unshift(color);

    }
}
else
    {
     return "Number cannot be zero/negative";
    }
}

//Progression 2: Remove ___ chocolates from the top the dispenser
function removeChocolates( chocolates, number)
{
    if(number > chocolates.length)
    {
        return "Insufficient chocolates in the dispenser";
    }
    else if (number > 0)
    {
        var removedChocolates = [ ];
        for ( var i = 0 ; i < number; i++)
        {
           removedChocolates.push(chocolates.shift( ));
        }
        return removedChocolates;
    }
    else    
    {
    return "Number cannot be zero/negative";
    }
}

//Progression 3: Dispense ___ chocolates
function dispenseChocolates(chocolates, number){
    if(number > chocolates.length)
    {
        return "Insufficient chocolates in the dispenser";
    }
    else if (number > 0)
    {
        var removedChocolates = [ ];
        for ( var i = 0 ; i < number; i++)
        {
           removedChocolates.push(chocolates.pop( ));
        }
        return removedChocolates;
    }
    else if (number > 6)
    {
        
        for ( var i = 0 ; i < 6; i++)
        {
           removedChocolates.push(chocolates.pop( ));
        }
        return removedChocolates;
    }
    else    
    {
    return "Number cannot be zero/negative";
    }


}

//Progression 4: Dispense ___ chocolates of ____ color
    function dispenseChocolatesOfColor(chocolates,number, color)
    {
        var favChocos = [];
        if (number > chocolates.length)
        {
            return "Insufficient chocolates in the dispenser";
        }
        else if (number > 0)
        {
            for (var i = 0; i< number; i++ ) 
            {
                favChocos.push (chocolates.pop(color));
            }
            return favChocos;
        }
    else  return "Number cannot be zero/negative";
    }



//Progression 5: Display ___ chocolates of each color. Return array of numbers [green, silver, blue, crimson, purple, red, pink]
let colours = ["green", "silver", "blue", "crimson", "purple", "red", "pink"];
function noOfChocolates(chocolates, colors = colours) {
	let result = [];
	let count = chocolates.length;
	if (count > 0) {
		let colorCount = [];
		colors.forEach((color) => {
			colorCount.push(chocolates.filter((word) => word === color).length);
		});
		result = colorCount.filter((count) => count > 0);
		
	}
	return result;
}

//Progression 6: Sort chocolates based on count in each color. Return array of colors
function sortChocolateBasedOnCount(choco = []) {
	let colorCount = [],
		final = [],
		resultArray = [];
	let count = choco.length;
	let colors = [...new Set(choco)];

	if (count > 0) {
		colorCount = noOfChocolates(choco, colors);

		final = colors
			.map((color, i) => [color, colorCount[i]])
			.sort((a,b) => {
				
				return b[1] - a[1];
			});
            colorCount.reverse();
        //     colors.reverse();
		// final.forEach((arr) => {
		// 	for (let i = 0; i < arr[1]; i++) {
		// 		resultArray.push(arr[0]);
        //     }
		// });
	}
	return resultArray;

}


//Progression 7: Change ___ chocolates of ____ color to ____ color
function changeChocolateColor(arr = [], count, oldColor, newColor) {
	let result = [];
	const len = arr.length;
	if (count < 0) result = "Number cannot be zero/negative";
	else if (oldColor === newColor) result = "Can't replace the same chocolates";
	else {
		if (count > 0) {
			for (let i = 0; i < len; i++) {
				if (arr[i] === oldColor) {
					arr[i] = newColor;
					count--;
				}
			}
		}
		result = arr;
	}
	return result;
}

//Progression 8: Change all chocolates of ____ color to ____ color and return [countOfChangedColor, chocolates]
function changeChocolateColorAllOfxCount(arr = [], oldColor, newColor) {
	let result = [0, []],
		oldColorCount = 0;
	if (oldColor === newColor) result = "Can't replace the same chocolates";
	else {
		const totalColor = (array, clr) =>
			array.filter((color) => color === clr).length;
		oldColorCount = totalColor(arr, oldColor);
		result[1] = changeChocolateColor(arr, oldColorCount, oldColor, newColor);
		result[0] = totalColor(result[1], newColor);
	}
	return result;
}
//Challenge 1: Remove one chocolate of ____ color from the top


//Challenge 2: Dispense 1 rainbow colored colored chocolate for every 3 chocolates of the same color dispensed
