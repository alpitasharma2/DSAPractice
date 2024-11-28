// javascript code for binary search.

var search = function(nums, target) {
    let low = 0;
    let high = nums.length-1;

    while(high>=low)
    {
        let mid = low + Math.floor((high-low)/2);
        if(nums[mid] == target)
        {
            return mid;
        }
        else if(nums[mid]>target){
            high = mid-1;
        }
        else{
            low = mid+1;
        }
    }
    return -1;
};

// Time Complexity : O(log n)
// why o(log n) : because we are dividing the sorted array into 2 halves by calculating the middle index. 
// The process repeats until the target is found or the search space becomes empty.After k steps, the size of the search space becomes n / 2^k
// and n/2^k = 1 then 2^k = n which is k = log(n)
// Space Complexity : O(1)
