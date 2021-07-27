function repeatedString(s, n) {
    if (s === "a")
        return n;
    // Write your code here
    var numAs = 0;
    var ptr1 = 0;
    var totalLoops = 0;
    while (totalLoops <= n) {
        if (ptr1 >= s.length)
            ptr1 = 0;
        console.log(s[ptr1], ptr1);
        if (s[ptr1] === "a") {
            numAs++;
            totalLoops++;
        }
        else {
            ptr1++;
            totalLoops++;
        }
    }
    console.log(numAs);
    return numAs;
}
repeatedString("aba", 10);
//# sourceMappingURL=repeatA.js.map