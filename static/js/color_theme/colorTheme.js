export default function colorTheme(btn){
    const $scrollBtn = document.querySelector(btn);

    window.addEventListener("scroll",e=>{
        let scrollValue = window.pageXOffset || document.documentElement.scrollTop;
        if(scrollValue >= 3319){
            $scrollBtn.classList.add("is-color");
        }else{
            $scrollBtn.classList.remove("is-color");
        }
    })
   
} 