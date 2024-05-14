let number = parseInt(prompt("Please choose the number you would like to use to play FizzBuzz: "));

function fizzBuzz(number) {
    let result = "";

    for (let i = 1; i <= number; i++) {
        if (i % 15 == 0) {
            result += "FizzBuzz / ";
        } else if (i % 3 == 0 ) {
            result += "Fizz / ";
        } else if (i % 5 == 0 ) {
            result += "Buzz / ";
        } else {
            result += i + " / ";
        }
    }
    return result;
}

document.getElementById("java").innerHTML = fizzBuzz(number);