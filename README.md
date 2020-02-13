<h1>ProGrad</h1>

## LAB | Chocolate Dispenser

Caitlyn loved chocolates and asked her mum to buy her a truck of chocolates. Her mum wasn't as generous, but she did buy Cait a tiny chocolate dispenser. However, she didn't teach Cait how to operate it. She would only give her one chocolate a day. Cait obviously wanted more, so much more.

Cait is now on a quest to create a virtual terminal which can directly access the chocolate machine. She needs **YOU** to help her code functionalities in the back-end though. Go to the `src/app.js` file and complete all the unfinished code to satiate her sweet tooth.

## Requirements

- Fork this repo
- Clone this repo
- Practice JavaScript Arrays - _higher order functions_

## Submission

- Upon completion, run the following commands:

  ```
  git add .
  git commit -m "done"
  git push origin master
  ```

- Create Pull Request so your TAs can check up your work.

## Starter code

The `src/app.js` contains an array of 100 chocolates. We are talking about the 100 _strings_ that specifies the color of each chocolate. Available chocolates are of the colors `green, red, purple, blue, crimson, silver, pink`.

Every function will take the `chocolates` array as it's first input by default.

### Tests

Ohh yes! We have our beloved tests, and you already know how this works. Open the `SpecRunner.html` file on your browser and start coding to pass the test. Remember to focus on one test at a time and read carefully the instructions to understand what you have to do.

## Trial 1: MORE! MORE! MORE!

Hundred chocolates? Not enough! We certainly need more. Create a function `addChocolates()` which takes `color, count` as arguments and adds them to the dispenser from the top.

## Trial 2: LESS! LESS! LESS!

We have added too many chocolates and the machine has started to malfunction. Create a function `removeChocolates()` that takes `number` as an argument and _returns an array of chocolates_ that have been removed from the top.

## Trial 3: One is not enough!

Cait can't have just one chocolate a day. So our next task would be to create a function `dispenseChocolates()` that dispenses chocolate at will. It takes `number` as an argument and _returns an array of chocolates_ from the bottom.

## Trial 4: My favourite color is...

Cait is annoyed with all the green chocolates she's been getting. Time to change things up a bit. Create a function `dispenseChocolatesOfColor()` which takes `number, color` as arugments and _return an array of chocolates_ from the bottom of the given color.

## Trial 5: LED my chocos!

Cait is finding it difficult to keep track of her chocolates. You'll need to create an LED that shows her how many of each chocolate are remaining. Create a function `noOfChocolates()` that _returns an array of number of chocolates_ in the order `[green, silver, blue, crimson, purple, red, pink]`.

## Trial 6: Let's stack em up!

Cait wants to eat a lot of chocolates, but is trying to restrain herself. Therefore she has decided to only eat chocolates that are least in number. To do this though, we need the chocolates arranged properly though. Create a function `sortChocolateBasedOnCount()` which sorts the chocolates in descending order of their count.

## Trial 7: They taste the same!

Cait wants to able to change the color of the chocolates now. Little does she know, changing the wrapper won't change the flavor. But, well, create a function `changeChocolateColor()` which takes the arguments `number, color, finalColor` and changes n chocolates of the given color to the finalColor.

## Trial 8: Convert these heretics!

Caits wants to change all chocolates of a given color to some other color. Pretty sure she's trying to get rid of all the green chocolates. Create a function `changeChocolateColorAllOfxCount()` which takes the argument `color, finalColor` and changes all chocolates of color to finalColor. It _returns [countOfFinalColorChocolates, chocolates]_.

## Challenge 1: Fresh pickings!

Cait believes that all the best and newest chocolates are the top of the machine. She needs help removing just one chocolate of the given color from the top. Create a function `removeChocolateOfColor()` which takes an argument `color` and removes one chocolate of the given color from top.

## Challenge 2: Rainbows and sunshine!

Cait has found something incredible. Combining similar colored chocolates gives us an additional rainbow colored chocolate. She wants more of these, and less of her having to combine them. Create a function `dispenseRainbowChocolates()` which takes an argument `number` and _returns the number of rainbow chocolates_ dispensed for every 3 chocolates of the same color.
