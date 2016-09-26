    /* Double your objects with this one weird trick */
     /* Double your objects withi this one weird trick */


    const sourceArray = [
        { field1: "field 1, row 1", field2: "field 2, row 1" },
        { field1: "field 1, row 2", field2: "field 2, row 2" },
        { field1: "field 1, row 3", field2: "field 2, row 3" }
    ];

    const duplicatedArray = sourceArray.reduce(
        function (accumulatedResult, currentItem) {
            return accumulatedResult.concat([currentItem, currentItem]);
        },
        [] // Start with an empty array
    );

    console.log("Original collection:", sourceArray);
    console.log("Duplicated Collection:", duplicatedArray);

