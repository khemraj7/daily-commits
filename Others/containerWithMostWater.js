console.log('Container with most water')

var maxArea = function (height) {
    let left = 0, right = height.length - 1, maxArea = 0;
    while (left < right) {
        // step 1: find width
        let width = right - left

        // step 2: find minimum height
        let minHeight = Math.min(height[left], height[right])

        //step 3: find area
        let area = width * minHeight

        // step 4 : calculate maximum area
        maxArea = Math.max(maxArea, area)

        // step 5 : check left and right value
        if (height[left] < height[right]) {
            left++
        } else {
            right--
        }
    }
    return maxArea
}

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]))