var maximumBeauty = function(nums, k) {
     // Sort the nums array to make it easier to manage the difference between elements
    nums.sort((a, b) => a - b);
    
    let maxBeauty = 1;  // Minimum beauty is 1 (since every element can form a subsequence of length 1)
    let left = 0;  // Left pointer of the sliding window
    
    // Use a two-pointer approach to find the longest subsequence
    for (let right = 0; right < nums.length; right++) {
        // Expand the window with the right pointer
        // We want nums[right] to be able to form a subsequence with nums[left]
        while (nums[right] - nums[left] > 2 * k) {
            // If the difference is greater than 2 * k, move the left pointer to shrink the window
            left++;
        }
        
        // The current window [left, right] can form a valid subsequence
        maxBeauty = Math.max(maxBeauty, right - left + 1); // +1 because to get the elements between left to right.
    }
    
    return maxBeauty;

};
