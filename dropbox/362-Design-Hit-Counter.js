/**
 * Initialize your data structure here.
 */
var HitCounter = function() {
    this.queue = new Array();
};

/**
 * Record a hit.
        @param timestamp - The current timestamp (in seconds granularity). 
 * @param {number} timestamp
 * @return {void}
 */
HitCounter.prototype.hit = function(timestamp) {
    this.queue.unshift(timestamp)    
    while (this.queue.length > 0 && (timestamp - this.queue[this.queue.length - 1]) >= 300) {
        this.queue.pop();
    }
    console.log(timestamp, ':', this.queue.length)
};

/**
 * Return the number of hits in the past 5 minutes.
        @param timestamp - The current timestamp (in seconds granularity). 
 * @param {number} timestamp
 * @return {number}
 */
HitCounter.prototype.getHits = function(timestamp) {
    while (this.queue.length > 0 && (timestamp - this.queue[this.queue.length - 1]) >= 300) {
        this.queue.pop();
    }
    return this.queue.length;
};

/** 
 * Your HitCounter object will be instantiated and called as such:
 * var obj = Object.create(HitCounter).createNew()
 * obj.hit(timestamp)
 * var param_2 = obj.getHits(timestamp)
 */

var obj = new HitCounter()
obj.hit(1)
obj.hit(2)
obj.hit(3)
console.log(obj.getHits(4))
obj.hit(300)
console.log(obj.getHits(300))
obj.hit(300)
console.log(obj.getHits(301))
