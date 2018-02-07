'use strict';

$(() =>{
  $('.top-nav').on('click', '.hamburger', ()=>{
    $('nav.main-nav').toggleClass('hidden');
  });
  $('nav ul li a').on('click', e => {
    const current = $(e.currentTarget).next('nav');
    $('nav nav').not(current).addClass('hidden');
    current.toggleClass('hidden');
  });
  
});
