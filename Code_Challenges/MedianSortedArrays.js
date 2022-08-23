

function MedianSortedArrays(n, m){
    let listsizeError = 'One or more of the arrays is too big.';
    if((n >= 0 && n <=1000) && (m >= 0 && m <=1000  )){
        const nums1 = Array(n).fill().map(()=>(Math.round(Math.random()*320)-160));
        const nums2 = Array(m).fill().map(()=>(Math.round(Math.random()*320)-160));
        const mergedArray = nums1.concat(nums2).sort(function(a, b){return a-b});;
        const mid = Math.floor(mergedArray.length/2);
        let median = 0;

        console.log(mergedArray);

        if((mergedArray.length) % 2 == 1){
            median = mergedArray[mid];
        }else{
            median = (mergedArray[mid] + mergedArray[mid-1])/2;
        }
        return median;
    }else
    return listsizeError;
}
console.log('The median is ' + MedianSortedArrays(5, 5));
console.log('The median is ' + MedianSortedArrays(10, 13));