const menujs = document.querySelector("#menujs");
const menu1js = document.querySelector("#menu1js");
const navjs = document.querySelector("#navjs");

menujs.addEventListener("click", function(){
    menu1js.classList.toggle("mostrar");
    navjs.classList.toggle("mostrar");
    classList.toggle("mostrar");
});


const submenuBtn = document.querySelectorAll(".submenuBtn");
for(let i=0; i < submenuBtn.length; i++){
    submenuBtn[i].addEventListener("click", function(){
        if(window.innerWidth < 768){
            const submenu = this.nextElementSibling;
            const height = submenu.scrollHeight;
            if(submenu.classList.contains("mostrar2")){
                submenu.classList.remove("mostrar2");
                submenu.removeAttribute("style");
            } else{
                submenu.classList.add("mostrar2");
                submenu.style.height = height + "px";
            }
        }
});
}