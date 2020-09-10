export default function darkTheme(btn,classDark,logo,attr){
    const $themeBtn = document.querySelector(btn),
          $navTheme = document.querySelector(logo),
          $selectors = document.querySelectorAll("[data-dark]");


        let moon = "🌙",
            sun = "☀️",
            dark = "../../assets/logo-footer.svg",
            light = "../../assets/logo.svg";

        const darkMode = () => {
            $selectors.forEach(el => el.classList.add(classDark));
            $themeBtn.textContent = sun;
            $themeBtn.classList.add("is-color");
            $navTheme.setAttribute(attr,dark);
            localStorage.setItem("theme","dark");
        }

        const lightMode = () =>{
            $selectors.forEach(el=>el.classList.remove(classDark));
            $themeBtn.textContent = moon;
            $themeBtn.classList.remove("is-color");
            $navTheme.setAttribute(attr,light);
            localStorage.setItem("theme","light");
        }

    document.addEventListener("click",e=>{
        if(e.target.matches(btn)){
            if($themeBtn.textContent === moon){
                darkMode();
            }else{
                lightMode();
            }
        }
    });

    document.addEventListener("DOMContentLoaded", e=>{
        if(localStorage.getItem("theme") === null) localStorage.setItem("theme","light");
        if(localStorage.getItem("theme") === "dark") darkMode();
        if(localStorage.getItem("theme") === "light") lightMode(); 
    });
}  