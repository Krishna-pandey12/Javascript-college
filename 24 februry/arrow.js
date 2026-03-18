const temp =(arr) =>{
   let  sum = 0;
    for (let i of arr){
        sum = sum +i;
    }
    average = sum/arr.length;
    console.log("the average is ",average);
    
}

let arr =[10,20,30,40,50];
temp(arr);