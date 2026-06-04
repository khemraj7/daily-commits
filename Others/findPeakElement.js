console.log("Find Peak Element")

function findPeakElement(arr) {
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        // Find the middle index
        const mid = left + Math.floor((right - left) / 2)

        //  Check if the mid element is smaller than the next element
        if (arr[mid] < arr[mid + 1]) {
            // Move left pointer to the right side
            left = mid + 1
        } else {
            // Move right pointer to mid
            right = mid
        }

    }

    return arr[left]
}

console.log(findPeakElement([1, 3, 5, 6, 4, 2]))