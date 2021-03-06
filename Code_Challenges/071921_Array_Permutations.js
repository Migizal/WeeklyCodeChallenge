/*
Given array of distinct integers, print all permutations of the array.
For example :
array : [10, 20, 30]

Permutations are :

[10, 20, 30]
[10, 30, 20]
[20, 10, 30]
[20, 30, 10]
[30, 10, 20]
[30, 20, 10] 
*/
function permute(permutation) {
    var length = permutation.length,
        result = [permutation.slice()],
        c = new Array(length).fill(0),
        i = 1, k, p;
  
    while (i < length) {
      if (c[i] < i) {
        k = i % 2 && c[i];
        p = permutation[i];
        permutation[i] = permutation[k];
        permutation[k] = p;
        ++c[i];
        i = 1;
        result.push(permutation.slice());
      } else {
        c[i] = 0;
        ++i;
      }
    }
    return result;
  }
  const arr = [10, 20, 30];
  console.log(permute(arr));
