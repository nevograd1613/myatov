export default () => {
   let slider = document.querySelector('.reserch__wrapper');
   let innerSlider = document.querySelector('.reserch__inner');
   let ofs = 0;
   const btnLeft = document.querySelector('.reserch__path__left');
   const btnRight = document.querySelector('.reserch__path__right');

   let pressed = false;
   let startx;
   let x;
   slider.addEventListener('mousedown', (e) => {
      pressed = true;
      startx = e.offsetX - innerSlider.offsetLeft;
      slider.style.cursor = 'grabbing';
   });

   slider.addEventListener('touchstart', (e) => {
      pressed = true;
      startx = e.pageX - innerSlider.offsetLeft;
   });

   btnRight.addEventListener('click', (e) => {
      x = e.offsetX;
      ofs = ofs - 300;
      if (ofs <= -1270) {
         ofs = -1270;
      }

      innerSlider.style.left = `${x + ofs}px`;

   });

   btnLeft.addEventListener('click', () => {
      ofs = ofs + 300;
      if (ofs > 0) {
         ofs = 0;
      }
      innerSlider.style.left = `${x + ofs}px`;
   });

   slider.addEventListener('mouseenter', () => {
      slider.style.cursor = 'grab';
   });

   slider.addEventListener('mouseup', () => {
      slider.style.cursor = 'grab';
   });

   window.addEventListener('mouseup', () => {
      pressed = false;
   });

   window.addEventListener('touchend', () => {
      pressed = false;
   });

   slider.addEventListener('mousemove', (e) => {
      if (!pressed) return;
      e.preventDefault();

      x = e.offsetX;

      innerSlider.style.left = `${x - startx}px`;


      checkboundary();
   });

   slider.addEventListener('touchmove', (e) => {
      if (!pressed) return;
      e.preventDefault();

      x = e.pageX;

      innerSlider.style.left = `${x - startx}px`;

      checkboundary();
   });

   function checkboundary() {
      let outer = slider.getBoundingClientRect();
      let inner = innerSlider.getBoundingClientRect();

      if (parseInt(innerSlider.style.left) > 0) {
         innerSlider.style.left = '0px';
      } else if (inner.right < outer.right) {
         innerSlider.style.left = `-${inner.width - outer.width}px`;
      }
   }

checkboundary();
}