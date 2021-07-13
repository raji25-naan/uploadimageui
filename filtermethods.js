var a=[1,2,5,6,8,5,9]
var dd=a.map(myFunction)
    console.log(dd);
function myFunction(a){
    console.log(a);
    return a % 3;
    
}
var a=[1,2,5,6,8,5,9]
var dd=a.filter(myFunction)
    console.log(dd);
function myFunction(a){
    console.log(a);
    return a%3;
}

var c = [3,3,3]
c.Reduce(0)
console.log(c)