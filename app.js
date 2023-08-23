let but_el1 = document.getElementById("but_el1");
let but_el2 = document.getElementById("but_el2");
let but_el3 = document.getElementById("but_el3");
let but_el4 = document.getElementById("but_el4");
let but_el5 = document.getElementById("but_el5");

but_el1.addEventListener('click', function(){
    let insta = "https://www.instagram.com/b.mohammed.elhadi/";
    window.open(insta, "_blanck")
});

but_el2.addEventListener('click', function(){
    let facb = "https://www.facebook.com/hamadiiee/";
    window.open(facb, "_blanck")
})

but_el3.addEventListener('click', function(){
    let tel = "https://t.me/+213668611646";
    window.open(tel, "_blanck")
})

but_el4.addEventListener('click', function(){
    let x = "https://twitter.com/HadiBousba";
    window.open(x, "_blanck")
})

but_el5.addEventListener('click', function(){
    let linkedin = "https://www.linkedin.com/in/mohammed-el-hadi-bousba-0282b4249/";
    window.open(linkedin, "_blanck")
})

let sub_button = document.getElementById("sub_button")
let popup = document.getElementById("popup")
let close_button = document.getElementById("closeButton")

sub_button.addEventListener('click', function(){
    popup.style.display = "block"
})

close_button.addEventListener('click', function(){
    popup.style.display = "none"
})



