function removeDuplicates(arr) {
    let result = []

    for (let i = 0;i < arr.length;i++) {
        let isDuplicate = false;

        for (let j = 0;j < result.length;j++) {
            if (result[j] === arr[i]) {
                isDuplicate = true;
                break
            }
        }

        if (!isDuplicate) {
            result[result.length] = arr[i]
        }
    }

    return result
}