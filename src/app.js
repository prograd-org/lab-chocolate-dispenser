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
addChocolates=(chocolates,color,count)=>{
    if(count<=0){
        return('Number cannot be zero/negative');
    }
    else{
        chocolates.unshift('red','red')
    }
    return chocolates;
}

//Progression 2: Remove ___ chocolates from the top the dispenser
removeChocolates=(chocolates,number)=>{
    var arr=[];
    if(number<=0){
        return("Number cannot be zero/negative");
    }
    else if(chocolates.length<number){
        return('Insufficient chocolates in the dispenser');
    }
    else{
        for(var i=0;i<number;i++){
            arr.push(chocolates.shift())
        }
        return arr;
    }
   
}

//Progression 3: Dispense ___ chocolates
dispenseChocolates=(chocolates,number)=>{
    var arr=[];
    if(number<=0){
        return("Number cannot be zero/negative");
    }
    if(chocolates.length<number){
        return('Insufficient chocolates in the dispenser');
    }
        for(var i=0;i<number;i++){
            arr.push(chocolates.pop())
        }
        return arr;
}

//Progression 4: Dispense ___ chocolates of ____ color
dispenseChocolatesOfColor=(chocolates,number, color)=>{
    var arr=[];
    if(number<=0){
        return("Number cannot be zero/negative");
    }
    if(chocolates.length<number){
        return('Insufficient chocolates in the dispenser');
    }
    for(var i=0;i<number;i++){
        if(color=='green'){
        arr.push(chocolates.pop(color));
        }
        if(color=='red'){
            arr.push(chocolates.pop(color));
        }
    }
    return arr;
}

//Progression 5: Display ___ chocolates of each color. Return array of numbers [green, silver, blue, crimson, purple, red, pink]
noOfChocolates = (chocolates) => {
    var arr=[];
    var count=0;
    if(chocolates.length==0){
        return arr;
    }
     for(var i=0;i<chocolates.length;i++){
         if(chocolates[i] !== 0){
             count = 1;
             for(var j = i+1 ; j<chocolates.length ; j++){
                 if(chocolates[i] == chocolates[j]){
                     count++;
                     chocolates[j] = 0;
                 }
             }
             arr.push(count);
         }
     }
        return arr;
}

//Progression 6: Sort chocolates based on count in each color. Return array of colors
sortChocolateBasedOnCount = (chocolates) => {
    let dark = chocolates.reduce(function(b,a){
        if(a in b){
            b[a]++;
        }
        else{
            b[a] = 1;
        }
        return b;
    },{});
    let sorted = chocolates.sort((a,b)=>{
        if(dark[b] > dark[a]){
            return 1;
        }
        if(dark[b] < dark[a]){
            return -1;
        }
        if(a > b){
            return 1;
        }
        if(a < b){
            return -1;
        }
    });
    chocolates = sorted;
}

//Progression 7: Change ___ chocolates of ____ color to ____ color
changeChocolateColor = (chocolates,number, color, finalColor) => {
    var arr =[];
    if(chocolates.length == 0){
        return arr;
    }
    if(number <= 0){
        return "Number cannot be zero/negative";
    }
    if(color == finalColor){
        return ("Can't replace the same chocolates");
    }
    for(var i = 0;i<chocolates.length;i++){
        if(chocolates[i] == color){
            chocolates[i] = finalColor;
        }
        arr.push(chocolates[i]);
    }
    return arr;
}

//Progression 8: Change all chocolates of ____ color to ____ color and return [countOfChangedColor, chocolates]
function changeChocolateColorAllOfxCount(chocolates,Color,finalColor) {
    // var arr =[];
     if(Color == finalColor)
         return "Can't replace the same chocolates";
     
     else
         for(var i =chocolates.length; i>=0; i--){
             
             if(chocolates[i] == Color)
                 chocolates[i] = finalColor;
             
         }
         var output = [chocolates.length,chocolates];
         return output;
     
    
 }

//Challenge 1: Remove one chocolate of ____ color from the top


//Challenge 2: Dispense 1 rainbow colored colored chocolate for every 3 chocolates of the same color dispensed
