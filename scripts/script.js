document.addEventListener("DOMContentLoaded",()=>{
    let body = document.querySelector("body");
    let DarkModeBtn = document.querySelector("#DarkModeBtn");
    let DarkModeBtnImg = document.getElementById("DarkModeBtnImg");
    
    function toggleDarkMode() {
        if (body.classList.contains("dark-mode")) {
            body.classList.remove("dark-mode");
            DarkModeBtn.classList.add("bgMoon");
            DarkModeBtn.classList.remove("bgSun");
            DarkModeBtnImg.classList.remove("DarkModeBtnMoon");
            DarkModeBtnImg.classList.add("DarkModeBtnSun");
        }else{
            body.classList.add("dark-mode");
            DarkModeBtnImg.classList.remove("DarkModeBtnSun");
            DarkModeBtnImg.classList.add("DarkModeBtnMoon");
            DarkModeBtn.classList.add("bgSun");
            DarkModeBtn.classList.remove("bgMoon");
        }
    }
    
    DarkModeBtn.addEventListener("click",toggleDarkMode);
});