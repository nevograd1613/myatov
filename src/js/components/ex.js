const title = document.querySelectorAll('.abouth__wrapper');

export default asd => title.forEach((e) => {
   e.addEventListener('click', () => {
      e.classList.toggle('active');
      const list = e.querySelector('.abouth__list');
      
      e.classList.value.includes('active') ? list.style['display'] = 'block' : list.style['display'] = 'none';
   })
});