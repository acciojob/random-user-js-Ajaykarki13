//your code here
let btn1 =  document.querySelector("#one")
let btn2 =  document.querySelector("#two")
let btn3 =  document.querySelector("#three")
let btn4 =  document.querySelector("#getUser")
  
fetch("https://randomuser.me/api/")
.then((res)=>res.json())
.then((data)=>{
  let arr = data.results;
    let def = document.querySelector(".default")
    let info = document.querySelector(".info")
    arr.map((e)=>{
        
        def.innerHTML = 
`
<img src="${e.picture.large}">
<h1>${e.name.title+" "+e.name.first+" "+e.name.last}</h1>
`
info.innerHTML =
`
<p id ="a" style="display:none">${e.dob.age}</p>
<p id ="b" style="display:none">${ e.email}</p>
<p id ="c" style="display:none">${e.phone}</p>

`
btn1.addEventListener("click",()=>{document.querySelector("#a").style.display="block"})
btn2.addEventListener("click",()=>{document.querySelector("#b").style.display="block";document.querySelector("#a").style.display="none"})
btn3.addEventListener("click",()=>{document.querySelector("#c").style.display="block";document.querySelector("#b").style.display="none"})

    })

btn4.addEventListener("click",()=>{
  fetch("https://randomuser.me/api/")
.then((res)=>res.json())
.then((data)=>{
  let arr = data.results;
    let def = document.querySelector(".default")
    let info = document.querySelector(".info")
    arr.map((e)=>{
        
        def.innerHTML = 
`
<img src="${e.picture.large}">
<h1>${e.name.title+" "+e.name.first+" "+e.name.last}</h1>
`
info.innerHTML =
`
<p id ="a" style="display:none">${e.dob.age}</p>
<p id ="b" style="display:none">${ e.email}</p>
<p id ="c" style="display:none">${e.phone}</p>

`
btn1.addEventListener("click",()=>{document.querySelector("#a").style.display="block"})
btn2.addEventListener("click",()=>{document.querySelector("#b").style.display="block";document.querySelector("#a").style.display="none"})
btn3.addEventListener("click",()=>{document.querySelector("#c").style.display="block";document.querySelector("#b").style.display="none"})

    })
})
})
  })

