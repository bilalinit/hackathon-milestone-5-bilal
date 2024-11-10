 let myName = localStorage.getItem("name");
 window.addEventListener("load", () => {

 
  let jobtitle = localStorage.getItem("jobtitle");
  let phone = localStorage.getItem("phone");
  let email = localStorage.getItem("email");
  let address = localStorage.getItem("address");
  let pass1 = localStorage.getItem("pass1");
  let Deg = localStorage.getItem("Deg");
  let uni = localStorage.getItem("uni");
  let pass2 = localStorage.getItem("pass2");
  let Deg2 = localStorage.getItem("Deg2");
  let uni2 = localStorage.getItem("uni2");
  let Skills1 = localStorage.getItem("Skills1");
  let Skills2 = localStorage.getItem("Skills2");
  let Skills3 = localStorage.getItem("Skills3");
  let Skills4 = localStorage.getItem("Skills4");
  let Skills5 = localStorage.getItem("Skills5");
  let lang1 = localStorage.getItem("lang1");
  let lang2 = localStorage.getItem("lang2");
  let lang3 = localStorage.getItem("lang3");
  let lang4 = localStorage.getItem("lang4");
  let lang5 = localStorage.getItem("lang5");
  let styear = localStorage.getItem("styear");
  let endyear = localStorage.getItem("endyear");
  let company = localStorage.getItem("company");
  let complocation = localStorage.getItem("complocation");
  let jobtitle2 = localStorage.getItem("jobtitle2");
  let achv1 = localStorage.getItem("achv1");
  let achv2 = localStorage.getItem("achv2");
  let achv3 = localStorage.getItem("achv3");
  let picture = localStorage.getItem("profile_pic")


    let res1Name :any = document.getElementById('res1Name')
    res1Name.textContent = myName
    
    let resdesig :any = document.getElementById('resdesig')
    resdesig.textContent = jobtitle

    let resPhone :any = document.getElementById('resPhone')
    resPhone.textContent = phone
    
    let resEmail :any = document.getElementById('resEmail')
    resEmail.textContent = email
    
    let resuAdress :any = document.getElementById('resuAdress')
    resuAdress.textContent = address

    let resPass :any = document.getElementById('resPass')
    resPass.textContent = pass1

    let resdig :any = document.getElementById('resdig')
    resdig.textContent = Deg

    let resuni :any = document.getElementById('resuni')
    resuni.textContent = uni
    
    let respass2 :any = document.getElementById('respass2')
    respass2.textContent = pass2
    
    let resdig2 :any = document.getElementById('resdig2')
    resdig2.textContent = Deg2
    
    let resuni2 :any = document.getElementById('resuni2')
    resuni2.textContent = uni2
    
    let resSkills1 :any = document.getElementById('resSkills1')
    resSkills1.textContent = Skills1

    let resSkills2 :any = document.getElementById('resSkills2')
    resSkills2.textContent = Skills2

    let resSkills3 :any = document.getElementById('resSkills3')
    resSkills3.textContent = Skills3

    let resSkills4 :any = document.getElementById('resSkills4')
    resSkills4.textContent = Skills4

    let resSkills5 :any = document.getElementById('resSkills5')
    resSkills5.textContent = Skills5
     
    let reslang1 :any = document.getElementById('reslang1')
    reslang1.textContent = lang1

    let reslang2 :any = document.getElementById('reslang2')
    reslang2.textContent = lang2

    let reslang3 :any = document.getElementById('reslang3')
    reslang3.textContent = lang3

    let reslang4 :any = document.getElementById('reslang4')
    reslang4.textContent = lang4

    let reslang5 :any = document.getElementById('reslang5')
    reslang5.textContent = lang5

    let resstyear :any = document.getElementById('resstyear')
    resstyear.textContent = styear

    let resendyear :any = document.getElementById('resendyear')
    resendyear.textContent = endyear

    let rescompany :any = document.getElementById('rescompany')
    rescompany.textContent = company

    let rescomplocation :any = document.getElementById('rescomplocation')
    rescomplocation.textContent = complocation

    let resjobtitle2 :any = document.getElementById('resjobtitle2')
    resjobtitle2.textContent = jobtitle2

    let resachv1 :any = document.getElementById('resachv1')
    resachv1.textContent = achv1

    let resachv2 :any = document.getElementById('resachv2')
    resachv2.textContent = achv2

    let resachv3 :any = document.getElementById('resachv3')
    resachv3.textContent = achv3

    let resImg :any = document.getElementById('resImg')
    resImg.src = picture
    
  


});









//------------------ print button section ----------------//

let print_btn = document.getElementById("print_btn");

print_btn?.addEventListener("click", () => {
  window.print();
});

//------------------ edit button section ----------------//


let edit_btn = document.getElementById("edit_btn");


edit_btn?.addEventListener('click',()=>{
    window.history.back()
})

 
//------------------ share button section ----------------//

let share_btn = document.getElementById("share_btn");

let anc = document.getElementById("anc");
let userName;
if(myName){
  userName = myName.toLowerCase().replace( /\s+/g,"-")
}else{
  userName = "userName"
}

let baseUrl = "http://127.0.0.1:5500/resume/resume.html";
let uniqueUrl = `${baseUrl}?/${myName}`


share_btn?.addEventListener('click',()=>{
  anc?.setAttribute("href",uniqueUrl)
})
let copy_btn = document.getElementById("copy_btn");

copy_btn?.addEventListener('click',()=>{
  navigator.clipboard.writeText(uniqueUrl).then(()=>{
    alert("Link Copied to Clipboard")
  })

})