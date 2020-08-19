export default function hamburgerMenu(panelBtn,mainPanel,menuLink){
    
    const d = document;

    d.addEventListener("click", (e) =>{
        if(e.target.matches(panelBtn) || e.target.matches(`${panelBtn} *`)){
            d.querySelector(mainPanel).classList.toggle("is-active");
            d.querySelector(panelBtn).classList.toggle("is-active");
        }
        if(e.target.matches(menuLink)){
            d.querySelector(mainPanel).classList.remove("is-active");
            d.querySelector(panelBtn).classList.remove("is-active");
        }
    }) 
}   