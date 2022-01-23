var arrangeCoins = function(n){
    let count = 0
    let x = n
    for(let i = 1;i<=x;i++){
        if(i>n){
            return count
        }
        count += 1
        n -= i
    }
    return count
}
