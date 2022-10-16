/// Chris Catechis
/// 15 October 2022
/// This basic JS program calculates the perimeter and area of several shapes.

let choice1, choice2, height, width, base, radius, area, perimeter;

height = 10;
width = 20;
radius = 30;
base = 5;

let square = {
    height,
    area,
    perimeter,
};

let rectangle = {
    width,
    height,
    area,
    perimeter,
};

let triangle = {
    base,
    height,
    area,
    perimeter,
};

// I used perimeter so I don't have a separate variable
// for the same calculation, hope that's okay.
let circle = {
    radius,
    area,
    perimeter,
}

const firstChoices = ["square", "rectangle", "triangle", "circle"];

calculateShape = (choice1, choice2) => {
    let answer;
    height = 10;
    width = 20;
    radius = 30;
    base = 5;

    if (choice2 === "area") {
        switch (choice1) {
            case ("square"):
                answer = square.area = square.height * square.height;
                break;
            case ("rectangle"):
                answer = rectangle.area = rectangle.height * rectangle.width;
                break;
            case ("triangle"):
                answer = triangle.area = triangle.base * triangle.height * 0.5;
                break;
            case ("circle"):
                answer = circle.area = circle.radius * (3.14 * 3.14);
                break;
            default:
                console.log("please input a correct shape for calculation");
        }
    }

    else if (choice2 === "perimeter") {
        switch (choice1) {
            case ("square"):
                answer = square.perimeter = square.height * 4;
                break;
            case ("rectangle"):
                answer = rectangle.perimeter = (rectangle.height * 2) + (rectangle.width * 2);
                break;
            case ("triangle"):
                // we weren't told what kind of triangle so I'll do an equilateral :-)
                answer = triangle.perimeter = triangle.base * 3;
                break;
            case ("circle"):
                answer = circle.perimeter = 2 * circle.radius * 3.14;
                break;
            default:
                console.log("please input a correct shape for calculation");
        }
    }

    else {
        console.log("please input a proper choice for calculation function");
    }

    console.log("The", choice2, "of the", choice1, "is", answer);
    return answer;
};

testProgram = () => {
    firstChoices.forEach(firstChoice => calculateShape(firstChoice, "area"));
    firstChoices.forEach(firstChoice => calculateShape(firstChoice, "perimeter"));
}

testProgram();