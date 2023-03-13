$(function(){ 
    /**
     * 
     * @topbann-slide
    */
    const topbnnSlide = new Swiper(".topbnn-slide", {
        centeredSlides: true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        effect: 'fade',
        fadeEffect: {
        crossFade: true
        },
      });    
   /**
    * 
    * @visual-slide
   */
   const visualSlide = new Swiper(".vis-slide", {
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    effect: 'fade',
    fadeEffect: {
    crossFade: true
    },
    pagination: {
      el: ".pagination",
    },
  });

  /**
   * 
   * @product-slide
  */
  const productSlide = new Swiper(".product-slide", {
    slidesPerView: 2.2,
    spaceBetween: 10,
    freeMode: true,
    grabCursor: true,
  });
  
  /**
   * @header-scroll
  */
  let lastScroll = 0;
  $(window).scroll(function(){

    const usrScroll = $(this).scrollTop();

    if (usrScroll > 0) {
        $('.gnb, .group-gnb, .group-category').addClass('show')
    } else {
        $('.gnb, .group-gnb, .group-category').removeClass('show')
    }

    if(usrScroll > lastScroll){
      $('.quick-area').addClass('on');
    }else{
        $('.quick-area').removeClass('on');
    }

    lastScroll = usrScroll;

  })
  $(window).trigger('scroll');


  /**
  * 
  * @group-category drop-menu
  */
  $('.header .btn-open').click(function(e){
      e.preventDefault();
      if ($(this).hasClass('on')) {

        $('.category-item').css('display','block')
        $('.category-active').css('display','none')
        $(this).removeClass('on').attr('aria-label','펼쳐보기')

        $('.sort-list').stop().slideUp()
        
      } else {
        $('.category-item').css('display','none')
        $('.category-active').css('display','block')
        $(this).addClass('on').attr('aria-label','닫기')

        $('.sort-list').stop().slideDown()
      }
  })

    /**
     * 
     * @side-menu
    */
   $('.header .menu').click(function(e){
        e.preventDefault();
        $('.header .menu-con, .menu-bg').addClass('on')
        $('body').addClass('notScroll')
   })
   $('.header .btn-close,.menu-bg').click(function(e){
        e.preventDefault();
        $('.header .menu-con, .menu-bg').removeClass('on')
        $('body').removeClass('notScroll')
   })

   /**
     * 
     * @side-menu > nav nav-list
    */
   $('.group-menu .nav').click(function(e){
    const thisSubBox = $(this).siblings('.nav-list');

    if(thisSubBox.length > 0){
        e.preventDefault();
        thisSubBox.slideToggle();
        $(this).toggleClass('on');
    }

    if($('.group-menu .nav').hasClass('on')){
      $(this).attr('aria-label','접기')
    }else{
      $(this).attr('aria-label','펼치기')
    }
    })

   /**
     * 
     * @group-search
    */
   $('.header .search').click(function(e){
      e.preventDefault();
      $('.group-search').css('display','block');
   })
   $('.header .btn-prev').click(function(e){
      e.preventDefault();
      $('.group-search').css('display','none');
   })

  /**
   * 
   * @quick-area
  */
  $(window).scroll(function(){
    let target = $(window).scrollTop();
    if(target == $(document).height() - $(window).height()){
      $(".quick-area").removeClass('on')
    }
  });

  $('.btn-top').click(function(){
    $('html,body').animate({scrollTop:0},300)
  }) 

})