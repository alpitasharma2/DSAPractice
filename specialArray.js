var isArraySpecial = function(nums, queries) {
    const n = nums.length;
        const cum = new Array(n).fill(0);
        const ans = [];

        for (let i = 1; i < n; i++) {
            cum[i] = cum[i - 1];
            if (nums[i] % 2 === nums[i - 1] % 2) {
                cum[i]++;
            }
        }

        for (const q of queries) {
            const [x, y] = q;
            const falseCount = cum[y] - (x > 0 ? cum[x] : 0);
            if (falseCount && x !== y) {
                ans.push(false);
            } else {
                ans.push(true);
            }
        }

        return ans;
    };
