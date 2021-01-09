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

//Progression 1: Add green chocolates of 2 color
color="green";
count=2;
function addChocolates(chocolates,color,count){
    if(count<=0){
        return "Number cannot be zero/negative"
    }else{
    while(count){
    chocolates.splice(0,0,color)
    count--;
    }}
    return chocolates
}

//Progression 2: Remove 2 chocolates from the top the dispenser
function removeChocolates(count){
    if(count<=0){
        return "Number cannot be zero/negative"
    }else if (count>chocolates.length){
        return "Insufficient chocolates in the dispenser"
    }else{
    chocolates.splice(0,count)
    }}
    return chocolates
}

//Progression 3: Dispense 3 chocolates
function dispenseChocolates(count){
    if(count<=0){
        return "Number cannot be zero/negative"
    }
    else if(count>chocolates.length){
        return"Insufficient chocolates in the dispenser"
    }else{
        chocolates.splice(chocolates.length-count,count)
        }
    return chocolates
}


//Progression 4: Dispense 2 chocolates of green color
function dispenseChocolatesOfColor(chocolates,count,color){
    if(count<=0){
        return "Number cannot be zero/negative"
    }else{
    count_color=0
    chocolates.forEach(data=>data===color{
        count_color++;
    });
    if(count_color<count){
          return "Insufficient chocolates in the dispenser"
    }
    else{
        while(count)
        chocolates.splice(chocolates.lastIndexOf(color),1)
        count--;
    }}
    return chocolates
}

//Progression 5: Display number of chocolates of each color. Return array of numbers [green, silver, blue, crimson, purple, red, pink]
function noOfChocolates(chocolates){
    if(chocolates.length===0){
           return [];
    }else{
        arr=[[],[]];
        chocolates.forEach(data=>{
            if(arr[0].indexOf(data)<0){
            arr[0].push(data)
            arr[1].push(1)
            }
            else{
              arr[1][arr[0].indexOf(data)]+=1;
            }})
    }
    
    return(arr[1]);
}

//Progression 6: Sort chocolates based on count in each color. Return array of colors

sortChocolateBasedOnCount(chocolates)
function sortChocolateBasedOnCount(chocolates){
    new_arr=[];
    var new_chocolates=noOfChocolatess(chocolates)
    function noOfChocolatess(chocolates){
        if(chocolates.length===0){
               return [];
        }else{
            var obj=chocolates.reduce((total,color)=>{
                  if(color in total){
                      total[color]++;
                  }
                  else{
                      total[color]=1
                  }
                  return total
            },{})
        }
        
        return obj;
    }
    var chocolate=chocolates.sort(function(a,b){
        if(new_chocolates[b]>new_chocolates[a]){
            return 1
        }
        if(new_chocolates[b]<new_chocolates[a]){
            return -1
        }
    });
    return (chocolate)
}

//Progression 7: Change "2" chocolates of "green" color to "yellow" color
count=3;
new_color="yellow";
function changeChocolateColor(chocolates,count,color,new_color){
        if(chocolates.length===0){
            return []
        }else if(count<=0){
            return"Return 'Number cannot be zero/negative' when zero/negative values are passed as an argument"
        }else if(color===new_color){
            return "Return 'Can't replace the same chocolates"
        }
        else{
        var final=chocolates.map(data=>{
                  if(count>0){
                       if(color===data){
                       data=new_color
                       count--;
                       return data;
                       }
                  }return data;
        })}
        return chocolates
}
//Progression 8: Change all chocolates of ____ color to ____ color and return [countOfChangedColor, chocolates]
new_color="blue"
function changeChocolateColorAllOfxCount(chocolates,color,new_color){
    if(chocolates.length===0){
        return []
    }else if(color===new_color){
        return "Return 'Can't replace the same chocolates"
    }else{
        var result=chocolates.map(data=>{
            if(data===color){
                return data=new_color;
            }
            return data;
        });
        count=0;
        result.forEach(data=>{
            if(data===new_color) count++;
        });
    }
    return[count,result]
}

//Challenge 1: Remove one chocolate of "blue" color from the top
color="blue";
function removeChocolateOfColor(chocolates,color){
    if(chocolates.indexOf(color)<0){
        return "Color not found";
    }
    if(chocolates.length===0){
        return []
    }
    for(var x of chocolates){
        if(x===color){
            chocolates.splice(chocolates.indexOf(x),1)
        }
    }return chocolates
}

//Challenge 2: Dispense 1 rainbow colored colored chocolate for every 3 chocolates of the same color dispensed
