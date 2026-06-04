console.log("Merge two Array of Object with similar username")

function mergeArray(arr1, arr2) {
    // Step 1: Create an empty array to hold the merged results
    let mergedArray = [];

    // Step 2: Loop through the first array
    arr1.forEach(obj1 => {
        // Find the object in arr2 that has the same username
        let matchingObj = arr2.find(obj2 => obj2.username === obj1.username);

        if (matchingObj) {
            // Merge both objects if a match is found
            mergedArray.push({ ...obj1, ...matchingObj }); // Spread both objects into a new object
        }
    });

    // Step 3: Return the merged array
    return mergedArray;
}

let array1 = [
    { username: "Uday", age: 20 },
    { username: "Ravi", age: 18 }
]

let array2 = [
    { username: "Uday", salary: 20000 },
    { username: "Ravi", salary: 18000 }
]

console.log(mergeArray(array1, array2))