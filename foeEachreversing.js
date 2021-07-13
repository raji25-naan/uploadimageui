var a;
var b;
var c;
var array = [["raji","mean",1],["keerthena","tester",2],["venkat","fullstack",3]]
array.forEach(function(num,i){
    if(i==0 ){
        a = num;
        
    }
    else if(i==1 ){
        b = num;
        
    }
    else if (i==2){s
         c = num;
         
    }
    
})
array[0] = c;
array[1] = b;
array[2] = a;

console.log(array);