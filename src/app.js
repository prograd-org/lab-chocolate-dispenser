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
var addChocolates=(chocolates,color,count)=>{
    if(count<=0)
     return "Number cannot be zero/negative"
    for(let number=0;number<count;number++)
      chocolates.unshift(color)
}


//Progression 2: Remove ___ chocolates from the top the dispenser
var removeChocolates=(chocolates,count)=>{
    if(count<=0)
     return "Number cannot be zero/negative"
    if(count>chocolates.length)
     return `Insufficient chocolates in the dispenser`
    let result=[]
    for(let number=0;number<count;number++)
        result.push(chocolates.shift())
    return result

}


//Progression 3: Dispense ___ chocolates
var dispenseChocolates=(chocolates,count)=>{
    if(count<=0)
      return `Number cannot be zero/negative`
    if(count>chocolates.length)
      return `Insufficient chocolates in the dispenser`
    let result=[]
    for(let number=0;number<count;number++){
       result.push(chocolates.pop())
    }
    return result
}


//Progression 4: Dispense ___ chocolates of ____ color

var dispenseChocolatesOfColor=(chocolates,count,color)=>{
    if(count<=0)
     return "Number cannot be zero/negative"
    if(count>chocolates.length)
     return "Insufficient chocolates in the dispenser"
    let result=[]
    chocolates.reverse()
    let ourCount=0
    for(let number=0;number<chocolates.length;number++){
        if(chocolates[number]==color){
            result.push(color)
            ourCount++
        }
        if(ourCount==count)
          break
    }
    return result
       
}
//green, silver, blue, crimson, purple, red, pink

//Progression 5: Display ___ chocolates of each color. Return array of numbers [green, silver, blue, crimson, purple, red, pink]
let noOfChocolates=chocolates=>{
    let result=[0,0,0,0,0,0,0]
    chocolates.forEach(item=>{
        switch(item){
            case "green":result[0]++
                         break
            case "silver":result[1]++
                         break  
            case "blue":result[2]++
                         break 
            case "crimson":result[3]++
                         break    
            case "purple":result[4]++
                         break 
            case "red":result[5]++
                         break 
            case "pink":result[6]++
                        break;
            default:
        }
    })
    let finalResult=result.filter(item=>item)
    return finalResult
}

//Progression 6: Sort chocolates based on count in each color. Return array of colors
function sortChocolateBasedOnCount(chocolates) {
    let chocolate = chocolates.reduce(function(temp1, temp2) {
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

let changeChocolateColor=(chocolates,count,color,finalColor)=>{
    if(color==finalColor)
      return `Can't replace the same chocolates`
    if(count<=0)
      return `Number cannot be zero/negative`
    for(let number=0;number<chocolates.length;number++){
        if(chocolates[number]==color){
            chocolates[number]=finalColor
            count--
        }
        if(count===0)
         break
    }
    return chocolates
}


//Progression 8: Change all chocolates of ____ color to ____ color and return [countOfChangedColor, chocolates]
let changeChocolateColorAllOfxCount=(chocolates,color,finalColor)=>{
    if(color==finalColor)
      return `Can't replace the same chocolates`
    let countOfFinalColor=0
    chocolates.forEach((item,index)=>{
        if(item==color || item==finalColor){
          chocolates[index]=finalColor
          countOfFinalColor++
        }
    })
    let result=[]
    result.push(countOfFinalColor)
    result.push(chocolates)
    return result
}


//Challenge 1: Remove one chocolate of ____ color from the top


//Challenge 2: Dispense 1 rainbow colored colored chocolate for every 3 chocolates of the same color dispensed