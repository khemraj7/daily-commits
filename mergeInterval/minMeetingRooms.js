/*
Given two arrays start[] and end[] such that start[i] is the starting time of ith meeting and end[i] is the ending time of ith meeting. Return the minimum number of rooms required to attend all meetings.

Note: A person can also attend a meeting if it's starting time is same as the previous meeting's ending time.
*/

/**
 * @param {number[]} start
 * @param {number[]} end
 * @returns {number}
 */

var minMeetingRooms = function (start, end) {

    let i = 0;
    let j = 0;
    let room = 0;
    let result = 0;

    // sort both start and end time
    start.sort((a, b) => a - b);
    end.sort((a, b) => a - b);

    while (i < start.length && j < end.length) {
        if (start[i] < end[j]) {
            room++;
            result = Math.max(result, room);
            i++;
        } else {
            room--;
            j++;
        }
    }
    return result;
}

console.log(minMeetingRooms([1, 10, 7], [4, 15, 10])) // output: 1
console.log(minMeetingRooms([2, 9, 6], [4, 12, 10])) // output: 2