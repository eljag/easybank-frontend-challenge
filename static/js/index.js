import hamburgerMenu from "./menu/hamburgerMenu.js";
import buttonScrollTop from "./button_top/buttonScrollTop.js";
import colorTheme from "./color_theme/colorTheme.js";
import darkTheme from "./dark_theme/darkTheme.js";

const d = document;

d.addEventListener("DOMContentLoaded",e=>{
    hamburgerMenu(".panel-btn",".main-panel",".main-panel__link");
    buttonScrollTop(".top-btn");
    //colorTheme(".top-btn");
    //colorTheme(".panel-btn");
    //colorTheme(".dark-theme-btn"); 
    darkTheme(".dark-theme-btn","dark-mode",".logo","src"); 
});   