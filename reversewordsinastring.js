//Objective is to swap words in a string, while returning no white spaces
//in the returned string

let s = "  hello world!  "


//O(n) solution that splits the string based on spaces, then eliminates
//any word that is empty. Finally, it swaps opposite indicies in the array

let arr = s.split(' ').filter(word => word.length > 0)
    
let left = 0
let right = arr.length - 1
while (left < right) {
    let temp = arr[left]
    arr[left++] = arr[right]
    arr[right--] = temp
}

return arr.join(' ')