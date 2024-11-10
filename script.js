"use strict";
// ---------------- personal info -------------------//
let myName = document.getElementById("name");
let jobtitle = document.getElementById("jobtitle");
let phone = document.getElementById("phone");
let email = document.getElementById("email");
let address = document.getElementById("address");
// ---------------- Education -------------------//
let pass1 = document.getElementById("pass1");
let Deg = document.getElementById("Deg");
let uni = document.getElementById("uni");
let pass2 = document.getElementById("pass2");
let Deg2 = document.getElementById("Deg2");
let uni2 = document.getElementById("uni2");
// ---------------- skills -------------------//
let Skills1 = document.getElementById("Skills1");
let Skills2 = document.getElementById("Skills2");
let Skills3 = document.getElementById("Skills3");
let Skills4 = document.getElementById("Skills4");
let Skills5 = document.getElementById("Skills5");
// ---------------- Language -------------------//
let lang1 = document.getElementById("lang1");
let lang2 = document.getElementById("lang2");
let lang3 = document.getElementById("lang3");
let lang4 = document.getElementById("lang4");
let lang5 = document.getElementById("lang5");
// ---------------- Experience -------------------//
let styear = document.getElementById("styear");
let endyear = document.getElementById("endyear");
let company = document.getElementById("company");
let complocation = document.getElementById("complocation");
let jobtitle2 = document.getElementById("jobtitle2");
let achv1 = document.getElementById("achv1");
let achv2 = document.getElementById("achv2");
let achv3 = document.getElementById("achv3");
let pic = document.getElementById("Pic");
let submitbtn = document.getElementById("submitbtn");
let form = document.getElementById("form");
form?.addEventListener('submit', (e) => {
    e.preventDefault();
    localStorage.setItem("name", myName.value);
    localStorage.setItem("jobtitle", jobtitle.value);
    localStorage.setItem("phone", phone.value);
    localStorage.setItem("email", email.value);
    localStorage.setItem("address", address.value);
    localStorage.setItem("pass1", pass1.value);
    localStorage.setItem("Deg", Deg.value);
    localStorage.setItem("uni", uni.value);
    localStorage.setItem("pass2", pass2.value);
    localStorage.setItem("Deg2", Deg2.value);
    localStorage.setItem("uni2", uni2.value);
    localStorage.setItem("Skills1", Skills1.value);
    localStorage.setItem("Skills2", Skills2.value);
    localStorage.setItem("Skills3", Skills3.value);
    localStorage.setItem("Skills4", Skills4.value);
    localStorage.setItem("Skills5", Skills5.value);
    localStorage.setItem("lang1", lang1.value);
    localStorage.setItem("lang2", lang2.value);
    localStorage.setItem("lang3", lang3.value);
    localStorage.setItem("lang4", lang4.value);
    localStorage.setItem("lang5", lang5.value);
    localStorage.setItem("styear", styear.value);
    localStorage.setItem("endyear", endyear.value);
    localStorage.setItem("company", company.value);
    localStorage.setItem("complocation", complocation.value);
    localStorage.setItem("jobtitle2", jobtitle2.value);
    localStorage.setItem("achv1", achv1.value);
    localStorage.setItem("achv2", achv2.value);
    localStorage.setItem("achv3", achv3.value);
    if (pic.files && pic.files[0]) {
        let reader = new FileReader();
        reader.addEventListener("load", () => {
            let textImg = reader.result;
            localStorage.setItem("profile_pic", textImg);
        });
        reader.readAsDataURL(pic.files[0]);
    }
    window.location.href = "./resume/resume.html";
});
