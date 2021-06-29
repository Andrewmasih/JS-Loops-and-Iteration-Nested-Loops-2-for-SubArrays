/* NESTED LOOPS,we need another loop to access the items in the sub array.

a loop that will iterate throught the arrays nested inside the first array, array = [index] [index], for this we need another incrementor and another loop:

the nested loop, we call it i and give a value of 0, we need to make sure we stop the nested loop when there are no other items in the sub-array.

When the incrementor i is less than the length of each sub-array.

Our sub-array have only 2 items whcih mean that i will need to be less than 2,when it goes to 2,the nested loop will stop. 

The incrementor i varible in this case will be either 0 or 1.
*/

let subArray = [[1, 2], [3, 4], [5, 6], [7, 8], [9, 10]];

let i;

let j;

for (i = 0; i < subArray.length; i ++); {

  for (j = 0; j < subArray.length; j ++); {

    console.log(j); // is 5 subsets of arrays
  }  
}

subArray[0][1]; // 2

/* in this instance, we are going to get each item in the subArray that is positioned at index 0 and 1

Access items in the subArray as follows:

subArray [0] [0] is 1,
subArray [0] [1] is 2, 
subArray [1] [0] is 3,
subArray [1] [1] is 4,
subArray [2] [0] is 5,
subArray [2] [1] is 6,
subArray [3] [0] is 7,
subArray [3] [1] is 8,
subArray [3] [0] is 9,
subArray [4] [0] is 10,

The first number is the result of i incremention; numbers from 0 - 4  while the second number is the result of j incremention from 0 - 1.

*/