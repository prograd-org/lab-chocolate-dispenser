![Image description](https://i1.faceprep.in/ProGrad/face-logo-resized.png)

# ProGrad Lab | Chocoloate Dispenser

Caitlyn loved chocolates and asked her mum to buy her a truck of chocolates. Her mum wasn't as generous, but she did buy Cait a tiny chocolate dispenser. However, she didn't teach Cait how to operate it. She would only give her one chocolate a day. Cait obviously wanted more, so much more.

Cait is now on a quest to create a virtual terminal which can directly access the chocolate machine. She needs **YOU** to help her code functionalities in the back-end though. Go to the `src/app.js` file and complete all the unfinished code to satiate her sweet tooth.

## What should you do
```
Fork this repo
Clone this repo
Practice JavaScript Arrays - higher order function
```

## How To Submit
```
Upon completion, run the following commands:

git add .
git commit -m "ProGrad ID"
git push origin master

And finally, create a pull request so your ProGrad Mentor (PM) can review your work.
```

## Starter code

The `src/app.js` contains an array of 100 chocolates. We are talking about the 100 _strings_ that specifies the color of each chocolate. Available chocolates are of the colors `green, red, purple, blue, crimson, silver, pink`.

Every function will take the `chocolates` array as it's first input by default.

### Tests

As usual, open the `SpecRunner.html` file on your browser and start coding to pass the test. Remember to focus on one test at a time and read carefully the instructions to understand what you have to do.

### Progression 1: MORE! MORE! MORE!

Hundred chocolates? Not enough! We certainly need more. Create a function `addChocolates()` which takes `chocolates,color, count` as arguments and adds them to the dispenser from the top.

### Progression 2: LESS! LESS! LESS!

We have added too many chocolates and the machine has started to malfunction. Create a function `removeChocolates()` that takes `number,chocolates` as an argument and _returns an array of chocolates_ that have been removed from the top.

### Progression 3: One is not enough!

Cait can't have just one chocolate a day. So our next task would be to create a function `dispenseChocolates()` that dispenses chocolate at her will. It takes `number,chocolates` as an argument and _returns an array of chocolates_ from the bottom.

### Progression 4: My favourite color is...

Cait is annoyed with all the green chocolates she's been getting. Time to change things up a bit. Create a function `dispenseChocolatesOfColor()` which takes `chocolates,number, color` as arugments and _return an array of chocolates_ from the bottom of the given color.

### Progression 5: LED my chocos!

Cait is finding it difficult to keep track of her chocolates. You'll need to create an LED that shows her how many chocolates of each color are remaining. Create a function `noOfChocolates()` that _returns an array of number of chocolates_ in the order `[green, silver, blue, crimson, purple, red, pink]`.

### Progression 6: Let's stack em up!

Cait wants to eat a lot of chocolates, but is trying to restrain herself. Therefore she has decided to only eat chocolates that are least in number. To do this though, we need to have the chocolates arranged properly. Create a function `sortChocolateBasedOnCount()` which sorts the chocolates in descending order of their count.

### Progression 7: They taste the same!

Cait wants to the ability to change the color of the chocolates now. Little does she know, changing the wrapper won't change the flavor. But, well, create a function `changeChocolateColor()` which takes the arguments `chocolates,number, color, finalColor` and changes n chocolates of the of color to finalColor

### Progression 8: Convert these heretics!

Caits wants to change all chocolates of a given color to some other color. Pretty sure she's trying to get rid of all the green chocolates. Create a function `changeChocolateColorAllOfxCount()` which takes the argument `chocolates,color, finalColor` and changes all chocolates of color to finalColor. It should _return [countOfFinalColorChocolates, chocolates]_.


### Challenge 1: Fresh pickings!

Cait believes that all the best and newest chocolates are at the top of the machine. She needs help removing just one chocolate of the given color from the top. Create a function `removeChocolateOfColor()` which takes an argument `color` and removes one chocolate of the given color from the top.

### Challenge 2: Rainbows and sunshine!

Cait has found something incredible. Combining similar colored chocolates gives us an additional rainbow colored chocolate. She wants more of these, and less of her having to combine them. Create a function `dispenseRainbowChocolates()` which takes an argument `number` and _returns the number of rainbow chocolates_ dispensed for every 3 chocolates of the same color.

Happy Coding ProGrad ❤️
