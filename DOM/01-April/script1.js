// // console.dir(document.head);
// // let div1=document.getElementById("mydiv");
// // console.log(div1);
// // div1.innerHTML="Explanation of html";
// let p1=document.getElementsByName('p');
// console.log(p1);
// Select using querySelector
    let text = document.querySelector("#myDiv");  
    let para = document.querySelector(".p1");     
    let button = document.querySelector("#btn");   

    // Apply action
    button.addEventListener("click", () => {
      text.textContent = "DOM Updated ";
      text.style.color = "red";

      para.style.color = "blue";
    });