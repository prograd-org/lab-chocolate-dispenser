//Trial 1 - Add ___ chocolates of ____ color
describe("Add chocolates of differenent color - addChocolates", function () {
  var candies = [
    "green",
    "blue",
    "blue",
    "red",
    "red",
    "silver",
    "purple",
    "silver"
  ];

  it("Defines addChocolates", function () {
    expect(typeof addChocolates).toBe("function");
  });

  it("Add two more green chocolates", function () {
    let expectedResult = 10;

    addChocolates(candies, "green", 2);

    let actualResult = candies.length;

    expect(actualResult).toEqual(expectedResult);
  });

  it("Add 0 chocolates of any color", function () {
    var candies = [
      "green",
      "blue",
      "blue",
      "red",
      "red",
      "silver",
      "purple",
      "silver"
    ];

    let expectedResult = "Number cannot be zero/negative";

    let actualResult = addChocolates(candies, "blue", 0);

    expect(actualResult).toEqual(expectedResult);
  });

  it("Add 2 red chocolates from the top of the dispenser", function () {
    var candies = [
      "green",
      "blue",
      "blue",
      "red",
      "red",
      "silver",
      "purple",
      "silver"
    ];

    let expectedResult = [
      "red",
      "red",
      "green",
      "blue",
      "blue",
      "red",
      "red",
      "silver",
      "purple",
      "silver"
    ];

    addChocolates(candies, "red", 2);

    let actualResult = candies;

    expect(actualResult).toEqual(expectedResult);
  });

  it("Add 2 red chocolates to the empty dispenser", function () {
    let expectedResult = ["red", "red"];

    let candies = [];

    addChocolates(candies, "red", 2);

    let actualResult = candies;

    expect(actualResult).toEqual(expectedResult);
  });

  it("Return 'Number cannot be zero/negative' when zero/negative values are passed as an argument", function () {
    let expectedResult = "Number cannot be zero/negative";

    let candies = ["green"];

    let actualResult = addChocolates(candies, "red", -1);

    expect(actualResult).toEqual(expectedResult);
  });
});

//Trial 2: Remove ___ chocolates from the top the dispenser
describe("Remove chocolates from the top of the dispenser - removeChocolates", function () {
  it("Defines removeChocolates", function () {
    expect(typeof removeChocolates).toBe("function");
  });

  it("Remove chocolates from the top of the dispenser, store it in an array and return it", function () {
    var candies = [
      "green",
      "blue",
      "blue",
      "red",
      "red",
      "silver",
      "purple",
      "silver"
    ];

    let expectedResult = ["green", "blue"];

    let actualResult = removeChocolates(candies, 2);

    expect(actualResult).toEqual(expectedResult);
  });

  it("Return 'Insufficient chocolates in the dispenser' when number is greater than chocolate count", function () {
    var candies = [
      "green",
      "blue",
      "blue",
      "red",
      "red",
      "silver",
      "purple",
      "silver"
    ];

    let expectedResult = "Insufficient chocolates in the dispenser";

    let actualResult = removeChocolates(candies, candies.length + 1);

    expect(actualResult).toEqual(expectedResult);
  });

  it("Remove all chocolates from the top of the dispenser and return in an array.", function () {
    var candies = [
      "green",
      "blue",
      "blue",
      "red",
      "red",
      "silver",
      "purple",
      "silver"
    ];

    let expectedResult = [
      "green",
      "blue",
      "blue",
      "red",
      "red",
      "silver",
      "purple",
      "silver"
    ];

    let actualResult = removeChocolates(candies, candies.length);

    expect(actualResult).toEqual(expectedResult);
  });

  it("Return 'Number cannot be zero/negative' when zero/negative values are passed as an argument", function () {
    let expectedResult = "Number cannot be zero/negative";

    let candies = ["green"];

    let actualResult = removeChocolates(candies, -1);

    expect(actualResult).toEqual(expectedResult);
  });
});

//Trial 3: Dispense ___ chocolates
describe("Dispense chocolates - dispenseChocolates", function () {
  it("Defines dispenseChocolates", function () {
    expect(typeof dispenseChocolates).toBe("function");
  });

  it("Dispense chocolates from the bottom of the dispenser, return them in an array.", function () {
    var candies = [
      "green",
      "blue",
      "blue",
      "red",
      "red",
      "silver",
      "purple",
      "silver"
    ];

    let expectedResult = ["silver", "purple", "silver"];

    let actualResult = dispenseChocolates(candies, 3);

    expect(actualResult).toEqual(expectedResult);
  });

  it("Return 'Insufficient chocolates in the dispenser' when number is greater than chocolate count", function () {
    var candies = [
      "green",
      "blue",
      "blue",
      "red",
      "red",
      "silver",
      "purple",
      "silver"
    ];

    let expectedResult = "Insufficient chocolates in the dispenser";

    let actualResult = dispenseChocolates(candies, candies.length + 1);

    expect(actualResult).toEqual(expectedResult);
  });

  it("Dispense 6 chocolates from the bottom of the dispenser, return them in an array.", function () {
    var candies = [
      "green",
      "blue",
      "blue",
      "red",
      "red",
      "silver",
      "purple",
      "silver"
    ];

    let expectedResult = ["silver", "purple", "silver", "red", "red", "blue"];

    let actualResult = dispenseChocolates(candies, 6);

    expect(actualResult).toEqual(expectedResult);
  });
  it("Return 'Number cannot be zero/negative' when zero/negative values are passed as an argument", function () {
    var candies = [
      "green",
      "blue",
      "blue",
      "red",
      "red",
      "silver",
      "purple",
      "silver"
    ];

    let expectedResult = "Number cannot be zero/negative";

    let actualResult = dispenseChocolates(candies, -1);

    expect(actualResult).toEqual(expectedResult);
  });
});

//Trial 4: Dispense ___ chocolates of ____ color
describe("Dispense chocolates of different color - dispenseChocolatesOfColor", function () {
  it("Defines dispenseChocolatesOfColor", function () {
    expect(typeof dispenseChocolatesOfColor).toBe("function");
  });

  it("Dispense 4 red chocolates from the bottom of the dispenser, return them in an array", function () {
    var candies = [
      "green",
      "green",
      "green",
      "green",
      "red",
      "red",
      "red",
      "red"
    ];

    let expectedResult = ["red", "red", "red", "red"];

    let actualResult = dispenseChocolatesOfColor(candies, 4, "red");

    expect(actualResult).toEqual(expectedResult);
  });

  it("Return 'Insufficient chocolates in the dispenser' when number is greater than chocolate count", function () {
    var candies = [
      "green",
      "blue",
      "blue",
      "red",
      "red",
      "silver",
      "purple",
      "silver"
    ];

    let expectedResult = "Insufficient chocolates in the dispenser";

    let actualResult = dispenseChocolatesOfColor(
      candies,
      candies.length + 1,
      "red"
    );

    expect(actualResult).toEqual(expectedResult);
  });

  it("Dispense 6 red chocolates from the bottom of the dispenser, return them in an array", function () {
    var sweets = ["green", "green", "green", "green", "green", "green"];

    let expectedResult = ["green", "green", "green", "green", "green", "green"];

    let actualResult = dispenseChocolatesOfColor(sweets, 6, "green");

    expect(actualResult).toEqual(expectedResult);
  });

  it("Return 'Number cannot be zero/negative' when zero/negative values are passed as an argument", function () {
    var candies = [
      "green",
      "green",
      "green",
      "green",
      "red",
      "red",
      "red",
      "red"
    ];

    let expectedResult = "Number cannot be zero/negative";

    let actualResult = dispenseChocolatesOfColor(candies, -1, "green");

    expect(actualResult).toEqual(expectedResult);
  });
});

// //Trial 5: Display ___ chocolates of each color. Return array of numbers [green, silver, blue, crimson, purple, red, pink]
describe("Display number of chocolates of each color - noOfChocolates", function () {
  it("Defines noOfChocolates", function () {
    expect(typeof noOfChocolates).toBe("function");
  });

  it("Return array of number of chocolates [green, silver, blue, crimson, purple, red, pink]", function () {
    var candies = [
      "green",
      "silver",
      "blue",
      "crimson",
      "purple",
      "red",
      "red",
      "pink",
      "blue",
      "crimson",
      "crimson"
    ];

    let expectedResult = [1, 1, 2, 3, 1, 2, 1];

    let actualResult = noOfChocolates(candies);

    expect(actualResult).toEqual(expectedResult);
  });

  it("Return [1] when called with a single-color array ['green']", function () {
    var candies = ["green"];

    let expectedResult = [1];

    let actualResult = noOfChocolates(candies);

    expect(actualResult).toEqual(expectedResult);
  });

  it("Return [1,2] when called with ['green','red','red']", function () {
    var candies = ["green", "red", "red"];

    let expectedResult = [1, 2];

    let actualResult = noOfChocolates(["green", "red", "red"]);

    expect(actualResult).toEqual(expectedResult);
  });

  it("Return [] when called with an empty array", function () {
    var candies = [];

    let expectedResult = [];

    let actualResult = noOfChocolates(candies);

    expect(actualResult).toEqual(expectedResult);
  });
});

//Trial 6: Sort chocolates based on count in each color. Return array of colors
describe("Sort chocolates based on count in each color - sortChocolateBasedOnCount", function () {
  it("Defines sortChocolateBasedOnCount", function () {
    expect(typeof sortChocolateBasedOnCount).toBe("function");
  });

  it("Return chocolates in descending order based on count in each color ['red','blue','green','red']", function () {
    let expectedResult = ["red", "red", "blue", "green"];

    let temp = ["red", "blue", "green", "red"];

    sortChocolateBasedOnCount(temp);

    let actualResult = temp;

    expect(actualResult).toEqual(expectedResult);
  });

  it("Return chocolates in descending order based on count in each color [green, silver, blue, crimson, purple, red, pink]", function () {
    var candies = [
      "green",
      "green",
      "green",
      "silver",
      "blue",
      "crimson",
      "purple",
      "red",
      "crimson",
      "purple",
      "purple",
      "green",
      "pink",
      "blue",
      "red",
      "silver",
      "crimson",
      "purple",
      "silver",
      "silver",
      "red",
      "green",
      "red",
      "silver",
      "pink",
      "crimson",
      "purple",
      "green",
      "red",
      "silver",
      "crimson",
      "pink",
      "silver",
      "blue",
      "pink",
      "crimson",
      "crimson",
      "crimson",
      "red",
      "purple",
      "purple",
      "green",
      "pink",
      "blue",
      "red",
      "crimson",
      "silver",
      "purple",
      "purple",
      "purple",
      "red",
      "purple",
      "red",
      "blue",
      "silver",
      "green",
      "crimson",
      "silver",
      "blue",
      "crimson",
      "purple",
      "green",
      "pink",
      "green",
      "red",
      "silver",
      "crimson",
      "blue",
      "green",
      "red",
      "red",
      "pink",
      "blue",
      "silver",
      "pink",
      "crimson",
      "purple",
      "green",
      "red",
      "blue",
      "red",
      "purple",
      "silver",
      "blue",
      "pink",
      "silver",
      "crimson",
      "silver",
      "blue",
      "purple",
      "purple",
      "green",
      "blue",
      "blue",
      "red",
      "red",
      "silver",
      "purple",
      "silver",
      "crimson"
    ];

    let expectedResult = [
      "purple",
      "purple",
      "purple",
      "purple",
      "purple",
      "purple",
      "purple",
      "purple",
      "purple",
      "purple",
      "purple",
      "purple",
      "purple",
      "purple",
      "purple",
      "purple",
      "purple",
      "silver",
      "silver",
      "silver",
      "silver",
      "silver",
      "silver",
      "silver",
      "silver",
      "silver",
      "silver",
      "silver",
      "silver",
      "silver",
      "silver",
      "silver",
      "silver",
      "silver",
      "red",
      "red",
      "red",
      "red",
      "red",
      "red",
      "red",
      "red",
      "red",
      "red",
      "red",
      "red",
      "red",
      "red",
      "red",
      "red",
      "crimson",
      "crimson",
      "crimson",
      "crimson",
      "crimson",
      "crimson",
      "crimson",
      "crimson",
      "crimson",
      "crimson",
      "crimson",
      "crimson",
      "crimson",
      "crimson",
      "crimson",
      "blue",
      "blue",
      "blue",
      "blue",
      "blue",
      "blue",
      "blue",
      "blue",
      "blue",
      "blue",
      "blue",
      "blue",
      "blue",
      "green",
      "green",
      "green",
      "green",
      "green",
      "green",
      "green",
      "green",
      "green",
      "green",
      "green",
      "green",
      "green",
      "pink",
      "pink",
      "pink",
      "pink",
      "pink",
      "pink",
      "pink",
      "pink",
      "pink"
    ];

    sortChocolateBasedOnCount(candies);

    let actualResult = candies;

    expect(actualResult).toEqual(expectedResult);
  });

  it("Returns a single chocolate when there is only 1 chocolate in the array ['red']", function () {
    let expectedResult = ["red"];

    let temp = ["red"];

    sortChocolateBasedOnCount(temp);

    let actualResult = temp;

    expect(actualResult).toEqual(expectedResult);
  });
});

// //Trial 7: Change ___ chocolates of ____ color to ____ color

describe("Change the color of chocolates - changeChocolateColor", function () {
  var candies = ["green", "green", "blue", "blue"];

  it("Defines changeChocolateColor", function () {
    expect(typeof changeChocolateColor).toBe("function");
  });

  it("Change the color of 2 green chocolates to blue and return the array chocolates", function () {
    var candies = ["green", "green", "blue", "blue"];

    let expectedResult = ["blue", "blue", "blue", "blue"];

    let actualResult = changeChocolateColor(candies, 2, "green", "blue");

    expect(actualResult).toEqual(expectedResult);
  });

  it("Return empty array when called with empty chocolates array", function () {
    let expectedResult = [];

    let actualResult = changeChocolateColor([], 1, "green", "blue");

    expect(actualResult).toEqual(expectedResult);
  });

  it("Return single array element when there is only one chocolate in the array", function () {
    let expectedResult = ["blue"];

    let actualResult = changeChocolateColor(["red"], 1, "red", "blue");

    expect(actualResult).toEqual(expectedResult);
  });
  it("Return 'Number cannot be zero/negative' when zero/negative values are passed as an argument", function () {
    var candies = [
      "green",
      "green",
      "green",
      "green",
      "red",
      "red",
      "red",
      "red"
    ];

    let expectedResult = "Number cannot be zero/negative";

    let actualResult = changeChocolateColor(candies, -1, "green", "blue");

    expect(actualResult).toEqual(expectedResult);
  });
  it("Return 'Can't replace the same chocolates'", function () {
    let expectedResult =
      "Can't replace the same chocolates";

    let actualResult = changeChocolateColor(["blue"], 1, "blue", "blue");

    expect(actualResult).toEqual(expectedResult);
  });
});

describe("Change the color of chocolates - changeChocolateColorAllOfxCount", function () {
  var candies = ["green", "red", "blue", "blue"];

  it("Defines changeChocolateColorAllOfxCount", function () {
    expect(typeof changeChocolateColorAllOfxCount).toBe("function");
  });

  it("Change the color of  green chocolates to blue and return the array", function () {

    let expectedResult = [3, ["blue", "red", "blue", "blue"]];

    let actualResult = changeChocolateColorAllOfxCount(
      candies,
      "green",
      "blue"
    );

    expect(actualResult).toEqual(expectedResult);
  });

  it("Return '[0,[]]' when called with empty chocolates array", function () {
    
    let expectedResult = [0, []];

    let actualResult = changeChocolateColorAllOfxCount([], "green", "blue");

    expect(actualResult).toEqual(expectedResult);
  });

  it("Return single array element when there is only one chocolate in the array", function () {
    
    
    let expectedResult = [1, ["blue"]];

    let actualResult = changeChocolateColorAllOfxCount(["red"], "red", "blue");

    expect(actualResult).toEqual(expectedResult);
  });
  it("Return 'Can't replace the same chocolates'", function () {
    let expectedResult =
      "Can't replace the same chocolates";

    let actualResult = changeChocolateColorAllOfxCount(
      ["blue"],
      "blue",
      "blue"
    );

    expect(actualResult).toEqual(expectedResult);
  });
});
