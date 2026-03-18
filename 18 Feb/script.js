// let student={
//     name:"krishna",
//     age:32,
//     cgpa:9.0,
//     isPass:true,
// };
// for(let key in student){
//     // console.log("keys=",key,"value=",student[key]),'<br>';
//     console.log(`keys=${key},value=${student[key]}`)
// }

// let marks=[56,70,88,78,45]
// console.log(typeof marks)
// console.log(marks.length)
// marks[2]=20
// console.log(marks)
// for(let i in marks){
//     console.log(marks[i])
// }

let studentArray=[{
    name:"krisha",
    age:32,
    cgpa:9.0,
    city:"Mumbai"

},
{
    name:"karan",
    age:12,
    cgpa:8.0,
    city:"Delhi"

},

{
     name:"karan",
    age:10,
    cgpa:7.8,
    city:"Gzb"
},
{
     name:"karan",
    age:10,
    cgpa:7.8,
    city:"Gzb"
},
{
     name:"karan",
    age:10,
    cgpa:7.8,
    city:"Gzb"
},
{
     name:"jai",
    age:10,
    cgpa:8.3,
    city:"Gzb"
},
{
     name:"anuj",
    age:10,
    cgpa:7.8,
    city:"kanpur"
},
{
     name:"karam",
    age:10,
    cgpa:7.8,
    city:"Gzb"
},
{
     name:"aman",
    age:10,
    cgpa:7.6,
        city:"Gzb"
},
{
     name:"kush",
    age:10,
    cgpa:7.8,
    city:"agra"
},
{
     name:"rahul",
    age:10,
    cgpa:7.8,
    city:"pyg"
}
]
for(let i in studentArray){
    // console.table(studentArray)
    if(studentArray[i].cgpa>8.0||studentArray[i].city==="Mumbai")

        console.log(studentArray[i])
}
// console.table(studentArray)