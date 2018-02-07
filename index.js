

$(() =>{
  $('.top-nav').on('click', '.hamburger', ()=>{
    $('nav.main-nav').toggleClass('hidden');
  });
  $('nav ul li a').on('click', e => {
    $(e.currentTarget).toggleClass('active');
    const current = $(e.currentTarget).next('nav');
    $('nav nav').not(current).addClass('hidden');
    $('nav ul li a').not($(e.currentTarget)).removeClass('active');
    current.toggleClass('hidden');
  });
  
});
