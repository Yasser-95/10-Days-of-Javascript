

/**
*   Return the second largest number in the array.
*   @param {Number[]} nums - An array of numbers.
*   @return {Number} The second largest number in the array.
**/
function getSecondLargest(nums) {
    // Complete the function
        var largest = nums[0];  
        var second; 
        
         // [2,3,6,6,5]
        for(var i = 0; i<nums.length; i++){
            let current = nums[i];
            if(current > largest){
              second = largest;
              largest = current;
            }else if(current<largest && current > second){
                second = current;   
            }
        } 
         return second;
      
    console.log(Math.max(nums));
      
 }

