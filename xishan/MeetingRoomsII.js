/**
Given an array of meeting time intervals consisting of start and end times [[s1,e1],[s2,e2],...] (si < ei), find the minimum number of conference rooms required.

For example,
Given [[0, 30],[5, 10],[15, 20]],
return 2.
*/
/**
 * @param {Interval[]} intervals
 * @return {number}
 */

const minMeetingRooms = (intervals) => {
    let [start, end] = intervals
    .reduce((result, interval) => {
      result[0].push(interval[0]);
      result[1].push(interval[1]);
      return result;
    }, [[], []])
    .map(timestamps => timestamps.sort((a, b) => (a - b)));
    return start.reduce(([room, endIter], startTimestamp) => {
      startTimestamp < end[endIter] ? room++ : endIter++;
      return [room, endIter];
    }, [0, 0])[0];
}

const intervals = [[0, 30],[5, 10],[15, 20]];
console.log(minMeetingRooms(intervals));
