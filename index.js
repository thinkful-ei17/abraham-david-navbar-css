$(() =>{
  $('.top-nav').on('click', '.hamburger', ()=>{
    $('nav.main-nav').toggleClass('hidden');
  });
});
