<<<<<<< HEAD
let darkMode = 0;
=======
document.addEventListener("DOMContentLoaded",()=>{
    let body = document.querySelector("body");
    let DarkModeBtn = document.querySelector("#DarkModeBtn");
    
    function toggleDarkMode() {
        if (body.classList.contains("dark-mode")) {
            body.classList.remove("dark-mode");
        }else{
            body.classList.add("dark-mode");
        }
    }
    
    DarkModeBtn.addEventListener("click",toggleDarkMode);
});
>>>>>>> 585bae6 (Boton "Dark Mode")
