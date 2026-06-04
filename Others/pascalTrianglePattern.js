console.log("Pascal triangle Patter")

function pascalTriangle(n) {

    // step 1 :  run a loop for n time

    for (let i = 0;i < n;i++) {
        //step 2:  declare a string and num with value 1
        let str = "", num = 1;

        //step 3 : add space
        for (let space = 0;space < n - i;space++) {
            str = str + " "
        }

        // step 4: add value
        for (let j = 0;j <= i;j++) {
            // step 5: add value with space
            str = str + " " + num

            //step 6: calculate num
            num = num * (i - j) / (j + 1)
        }
        // step 7: Print pattern
        console.log(str)
    }
}

pascalTriangle(5)