let form=document.querySelector("form")


form.addEventListener("submit",(e) => {
e.preventDefault();
let weight=document.querySelector("#w").value;
let height=document.querySelector("#h").value;
let result=document.querySelector("#res")


if (height===""  ||  isNaN(height)  ||  height<=0){
    alert("Enter a valid number")
}

 else if (weight===""  ||  isNaN(weight)  || weight<=0){
    alert("Enter a valid number")
}
else
 {
  let bmi=Math.round(weight/((height*height)/10000))
  result.innerHTML=`${bmi}`
 
// if (weight<18.6) {
//   result.innerHTML=`Under Weight :${bmi}`;
// }else if(weight>=18.6 && bmi<24.9 ) {
//   result.innerHTML=`Normal Range :${bmi}`;
// }else (weight>24.9); {
//   result.innerHTML=`Over Weight :${bmi}`;
// }
 }
})


