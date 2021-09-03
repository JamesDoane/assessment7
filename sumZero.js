function sumZero(arr){
    if(arr.length<2){
        return false
    }
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr.length; j++){
             if(arr[j]+arr[i] === 0){
                return true
            }
        }
    }
    return false
}


console.log(sumZero([]))
console.log(sumZero([1]))
console.log(sumZero([1,2,3,4,5,6,7]))
console.log(sumZero([1,2,3,-2]))
console.log(sumZero([55,-55]))

//Runtime complexity here is O(n^2), not great, not sure how to optimize. Will meditate on the subject. 