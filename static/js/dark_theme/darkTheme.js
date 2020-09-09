export default function darkTheme(btn,classDark,logo,attr){
    const $themeBtn = document.querySelector(btn),
          $navTheme = document.querySelector(logo),
          $selectors = document.querySelectorAll("[data-dark]");

        console.log($selectors);
        console.log($themeBtn.textContent)
        let moon = "🌙",
            sun = "☀️",
            dark = "../../assets/logo-footer.svg",
            light = "../../assets/logo.svg";
    document.addEventListener("click",e=>{
        if(e.target.matches(btn)){
            if($themeBtn.textContent === moon){
                $selectors.forEach(el => el.classList.add(classDark));
                $themeBtn.textContent = sun;
                $themeBtn.classList.add("is-color");
                $navTheme.setAttribute(attr,dark);
            }else{
                $selectors.forEach(el=>el.classList.remove(classDark));
                $themeBtn.textContent = moon;
                $themeBtn.classList.remove("is-color")
                $navTheme.setAttribute(attr,light);
            }
        }
    }) 
}  