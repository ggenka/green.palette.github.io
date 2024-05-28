

const swiper = new Swiper('.reviews__slider', {
	
	slidesPerView: 2,
	spaceBetween: 22,
	loop: true,

	// Navigation arrows
	navigation: {
	  nextEl: '.revieews_item-prev',
	  prevEl: '.revieews_item-next',
	},
  
  });


  const menuBtn = document.querySelector('.menu__btn');
  const menuList = document.querySelector('.menu__list');

  if (menuList.classList.contains('menu--open')) {
	menuList.classList.remove('menu--open');
  }


  menuBtn.addEventListener('click', () => {
	menuList.classList.toggle('menu--open');
  })