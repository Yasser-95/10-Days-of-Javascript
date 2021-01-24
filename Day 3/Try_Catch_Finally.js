

/*
 * Complete the reverseString function
 * Use console.log() to print to stdout.
 */
function reverseString(s) {
    try{
   
        var mys =s.split("").reverse().join("");
        console.log(mys);
        //console.log(s.reverse().join(''));
        // console.log(s.join(" "));
 
    } 
    catch(e){
      console.log(e.message);
      console.log(s);

    }  
      
    
}

