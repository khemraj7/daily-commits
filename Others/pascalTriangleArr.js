console.log("Pascal Triangle in Array")

function pascalTriangle(n) {
    let result = []

    // step 1: run a loop to n time
    for (let i = 0;i < n;i++) {

        //step 2 : declare a row inside loop and a value with 1
        let row = [], num = 1;

        // step 3 : insert the value in row which runs less than or equal to i time
        for (let j = 0;j <= i;j++) {
            row.push(num)
            //step 4 : calculate next value
            num = num * (i - j) / (j + 1)

        }
        // step 5; insert row in final result
        result.push(row)
    }

    return result
}

console.log(pascalTriangle(5))