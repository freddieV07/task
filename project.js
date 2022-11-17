// Get the minimum value of an array

const min = (array) =>{
smallestnum = array[0]
for (let i = 0; i < array.length; i++) {
   if (array[i]< smallestnum) {
     smallestnum = array[i]

   }
 }   
 return smallestnum
}
console.log(min([17,2,3,4,5,6,7,1,19,90]));

// Get the maximum value of an array
const max = (arr) =>{
maxnum = arr[0]
for (let i = 0; i < arr.length; i++) {
   if (arr[i]> maxnum) {
     maxnum = arr[i]

   }
    
 }
 return maxnum
}
console.log(max([17,2,3,4,5,6,7,1,19,90]));
// Get the negative and positive numbers maximum nd minimum positive number, the maximum nd minimum negative 

const all = () => {
const all_num = {}

// Get the negative nd positive numbers 
const neg_pos = (arr) =>{  
    pos = []
    neg = []
    num = 0
    for (let i = 0; i < arr.length; i++) {
       if (arr[i]> num) {
        
           pos.push(arr[i])
         all_num.positive = pos
          }else {
            neg.push(arr[i])
            all_num.negative = neg
    } 

   }
  
} 

neg_pos([-17,-2,-3,-4,5,-6,7,1,19,90]);

 // Get the maximum nd minimum positive numbers
const posMinMax = (val) =>{
    
    const positive={}
    
    
    positive["minima"] = min(val)
    positive["maxima"] = max(val)
    all_num.posMinMax = positive
    return all_num}


posMinMax([1,2,3,4,5]);

// Get the maximum nd minimum negative
const negMinMax = (val) =>{
    const negative={}
    
    
    negative["minima"] = min(val)
    negative["maxima"] = max(val)
    all_num.negMinMax = negative
    
}
negMinMax([-1,-12,-33,-4,-.5]);
return all_num
}
console.log(all());

// Merge the two arrays
const merge = ( list1, list2) =>{
  list = []
  list.push(list1)
  list.push(list2)
  one_list = list.toString()
  array_list = one_list.split(",")
  return array_list
}

console.log(merge(['1','2','3'],['4','5','6']));

console.log(all(all_num.negative));

//Remove duplicates of a number
const unique = (numbers) =>{

    let uniqueSubjects = numbers.filter((number, index) => {
        return numbers.indexOf(number) === index;
    });

    return uniqueSubjects
}
let subjects = [5,4,4,5,6,6,2,3,4,3,3,2,1,5];

console.log(unique(subjects)); 


