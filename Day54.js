function lcm(n1, n2) {
    const big = Math.max(n1, n2);
    const small = Math.min(n1, n2);

    let i = big;
    while (i % small !== 0) {

        i += big;
    }
    
    return i;
}

console.log(lcm(9, 18));
console.log(lcm(8, 5));