

/*
 * Return a count of the total number of objects 'o' satisfying o.x == o.y.
 * 
 * Parameter(s):
 * objects: an array of objects with integer properties 'x' and 'y'
 */
function getCount(objects) {

        return objects.filter(o =>o.x === o.y).length;

      /* Explanation=>
       * o is the value 
       * when we call filter method this method will loop through the objects array
       * and execute call back function for each element of the array 
       * if the element match the o.x == o.y it return  
      */

     // 1. Objects get filtered. 
     // 2. only these objects get through the filter, that are true when comparing their        x and y value.
     //3. The Length of filtered objects get returnd.

}

