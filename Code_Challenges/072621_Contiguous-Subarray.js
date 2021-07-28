let arr = [14,12,70,15,99,65,21,90];
let X = 97;
let newTotal, i, j;
let sumElements = [];
//Sum found between index 1 and 3
//Elements are 12, 70 and 15

for(i = 0; i < arr.length; i++){
    newTotal = arr[i];
    sumElements = [arr[i]];
    for(j = i + 1; j < arr.length; j++){
        if(newTotal == X){
            if(i == (j-1)){
                console.log("Sum found at index " + i);
            }else{
                console.log("Sum found between index " + i + " and " + (j-1));
            }
            console.log("Elements are "+ sumElements);
            return newTotal;

        }
        if(newTotal < X){
            newTotal += arr[j];
            sumElements.push(arr[j]);
        }
        if(newTotal > X){
            break;
        }
       
    }
}
console.log("No Subarray totals the required value");

