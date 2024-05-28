

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