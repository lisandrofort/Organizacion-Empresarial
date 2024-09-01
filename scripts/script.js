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