/**
 * 二分查找(仅当列表有序的时候才有用)
 * 复杂度: O(log n)  log指的是log2
 * 大O表示法指的并非是以秒为单位的速度，而是让你能够比较操作数。指出了操作数的增速。
 * 大O表示法指出了最糟糕情况下的运行速度。
 *
 * @param list
 * @param item
 * @returns {number}
 */
function binary_search(list, item) {
    let low = 0;
    let high = list.length - 1;
    let mid;
    let guess;

    while (low <= high) {
        mid = parseInt(low+(high-low)/2);

        guess = list[mid];

        console.log(`item: ${item} low: ${low} high: ${high} mid: ${mid}`)
        if (guess === item) {
            console.log(`index: ${mid}`)
            return mid;
        }

        if (guess > item) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }

    console.log('不存在...')
    return -1;
}

let arr = [1,2,3,4,5,6,7,8,9,10,11];
binary_search(arr, 9)