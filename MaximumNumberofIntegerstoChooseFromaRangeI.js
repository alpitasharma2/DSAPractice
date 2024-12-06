var maxCount = function(banned, n, maxSum) {
    const bannedSet = new Set(banned);
    let cnt = 0;
    let sum = 0;
    for(let i = 1; i <= n; i++) {
        if (!bannedSet.has(i)) {
            if (i + sum <= maxSum) {
                sum += i;
                cnt++;
            } else {
                break;
            }
        }
    }

    return cnt;
};
