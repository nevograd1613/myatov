import asd from './components/ex.js'
import slider from './components/slider.js';

document.getElementById("triggger").addEventListener("click", () => {
   Fancybox.show([{ src: "#dialog-content", type: "inline" }]);
 });

 document.getElementById("stop").addEventListener("click", (e) => {
   e.stopPropagation();
 });
 Fancybox.bind('[data-fancybox]', {
   //
 });

 Fancybox.bind('[data-fancybox="gallery"]', {
   //
 }); 
 Fancybox.bind('[data-fancybox="gallery-2"]', {
   //
 }); 

asd();

slider();