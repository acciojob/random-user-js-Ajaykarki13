//your code here
let main=document.querySelector("main");

let getUser=()=>{
    fetch("https://randomuser.me/api/")
    .then((res)=>res.json())
    .then((data)=>displayUser(data.results[0]))
    .catch((err)=>console.log(err));
}
getUser();

let displayUser = (data)=>{
    console.log(data);
    main.innerHTML="";
    let userDiv=document.createElement("div");
    let img= document.createElement("img");
    img.src=data.picture.large;
    let name=document.createElement("p");
    name.textContent=`${data.name.first} ${data.name.last}`;
    let additionalInfo=document.createElement("p");
    additionalInfo.setAttribute("heading","Additional Info");
    let age=document.createElement("button");
    age.textContent="Age";
    age.setAttribute("data-attr","age");
    let email=document.createElement("button");
    email.textContent="Email";
    email.setAttribute("data-attr","email")
    let phone=document.createElement("button");
    phone.textContent="Phone";
    phone.setAttribute("data-attr","phone")
    let anotherUser=document.createElement("button");
    anotherUser.setAttribute("id","getUser");
    anotherUser.textContent="GET ANOTHER USER";

    userDiv.append(img,name,additionalInfo,age,email,phone,document.createElement("br"),anotherUser);
    main.append(userDiv);

    age.addEventListener("click",()=>{
        additionalInfo.innerHTML=data.dob.age;
    })

    email.addEventListener("click",()=>{
        additionalInfo.innerHTML=data.email;
    })

    phone.addEventListener("click",()=>{
        additionalInfo.innerHTML=data.phone;
    })

    anotherUser.addEventListener("click",()=>{
        getUser();
    })
}




/*
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
*/
