
    const numbersArray = [2, 2, 2, 2, 2];

    console.log("Sum of numbers array (expecting 10) ->",
        numbersArray.reduce(
            function (accumulation, currentValue) {
                return accumulation + currentValue;
            }
        )
    );

    const anotherNumbersArray = [2, 2, 0, -2, -2];

    console.log("Sum of another numbers array (expecting 0) ->",
        anotherNumbersArray.reduce(function (accumulation, currentValue) {
            return accumulation + currentValue;
        })
    );



