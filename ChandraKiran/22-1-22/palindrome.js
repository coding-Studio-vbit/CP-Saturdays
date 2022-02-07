var isPalindrome = function(x) {
    x = x.toString();
    y = x
    for(let i = y.length-1;i>=0;i--){
        if(y[i]!==x[y.length-1-i]){return false;}
    }
    return true;
    
};