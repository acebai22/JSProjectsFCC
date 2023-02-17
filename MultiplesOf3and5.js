//Finds the sum of all the multiples of 3 or 5 below the provided parameter value number.

function multiplesOf3and5(number) {
    //this array lists every number under the entered 'number'
    let allNums = [];
    //this array will store all multiples of 3 or 5 within the 'allNums' array.
    let divNums = [];

    //avoids negative numbers
    if (number <= 0) {
        console.log('please enter a number above 0');
        return false;
    }

    else {
        //adds every int lower than 'number' to allNums [] 
        while (number > 0) {
            allNums.push(number - 1);
            number--;
        }
    }

    //checks allNums[] for ints divisible by 5 or 3. Pushes divisible numbers to divNums[]
    allNums.forEach(element => {
        if (element % 3 == 0 || element % 5 == 0) {
            divNums.push(element);
        }
    });

    let totalSum = 0;
    //adds together all ints from divNums[] and stores them in totalSum.
    divNums.forEach(x => {
        totalSum += x;
    })
    console.log(totalSum);
    return totalSum
}

multiplesOf3and5(95);