$('.burger').on('click', () => {
  $list = $('.nav__menu-item');
  if($('.burger__menu:has(*)').length){
    $('.burger__menu-wrapper').toggleClass("burger__menu-wrapper_opened");
    return;
  }
  $list.each((index,el)=>{
    $clone = $(el).clone(true).removeClass('nav__menu-item').addClass('burger__menu-item');
    $('.burger__menu').append($clone);
  });
  $('.burger__menu-item .nav__submenu').each((index, el) => {
    $(el).removeClass('nav__submenu').addClass('burger__menu-dropdown');
  })

  $('.burger__menu-wrapper').toggleClass("burger__menu-wrapper_opened");
})
$('.burger__menu-close-btn').on('click', () => {
  $('.burger').trigger('click');
});


function animationStart(entries, observer)
{
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('start');
    }
  });
}

let options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.2
  };

let observer = new IntersectionObserver(animationStart, options);
document.querySelectorAll('.slideLeft').forEach( element => {
  observer.observe(element);
})
document.querySelectorAll('.slideBottom').forEach(element => {
  observer.observe(element);
})
document.querySelectorAll('.slideRight').forEach(element => {
  observer.observe(element);
})

$('.gallery-mini__slider').slick({
  dots:false,
  arrows:true,
  slidesToShow:3,
  slidesToScroll:3,
  responsive:[
    {
      breakpoint:660,
      settings:{
        slidesToShow:1,
        slidesToScroll:1,
        arrows:false,
        dots:true
      }
    }
  ]
})