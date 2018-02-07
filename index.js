'use strict';

$(() =>{
  $('.top-nav').on('click', '.hamburger', ()=>{
    $('nav.main-nav').toggleClass('hidden');
  });
  $('nav ul li a').on('click', e => {
    $(e.currentTarget).next('nav').toggleClass('hidden');
  });
  
});
