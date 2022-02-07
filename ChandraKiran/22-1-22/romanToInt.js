var romanToInt = function(s) {
    const roman = {'I':1,'V':5,'X':10,'L':50,'C':100,'D':500,'M':1000}
    let integer = 0
    for(let i =0;i<s.length;i++) {
    if(s[i] === 'M') { integer += roman.M}
    else if(s[i] === 'D'){integer += roman.D}
    else if(s[i] === 'C'){
        if(s[i+1]==='D'){integer +=roman.D - roman.C;i+=1}
        else if(s[i+1] == 'M'){integer +=roman.M - roman.C ; i+=1}
        else{integer += roman.C ;}
    }
    else if(s[i] === 'L'){integer += roman.L;}
    else if(s[i] == 'X'){
        if(s[i+1]==='C'){integer +=roman.C - roman.X;  i+=1}
        else if(s[i+1] == 'L'){integer +=roman.L - roman.X ; i+=1}
        else{integer += roman.X;}
    }
    else if(s[i] === 'V'){integer += roman.V;}
    else{
        if(s[i+1] === 'X'){integer+= roman.X - roman.I;i+=1}
        else if(s[i+1] === 'V'){integer += roman.V - roman.I;i+=1}
        else{integer += roman.I;}
    }
    }
    return integer;
};
x = romanToInt('MCMXCIV')
console.log(x)