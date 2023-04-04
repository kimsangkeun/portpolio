//1.gnb 마우스오버, 포커스시 밑줄 => span.bar
$(function(){
    $('.gnb li a').on('mouseenter focus', function(){
        var bar = $(this).position().left;
        var widNum = $(this).width();
       $('span.bar').css({'left':bar + 'px', 'width':widNum + 'px', opacity:1});
    });
    $('.gnb li a').on('mouseleave', function(){
        $('span.bar').css({'left':0, 'width':0, 'opacity':0});
    });
});


    $(function(){
    $('.animate').scrolla({
        mobile: true,  //모바일버전시 활성화
        once: true //스크롤시 딱 한번만 하고 싶을 땐 true
    });
    });



// 메뉴버튼
$(function(){
    $('.menu button.open').on('click', function(){
        $('.menu .menuwrap').addClass('on');
    });
    $('.menu .menuwrap .close').on('click', function(){
        $('.menu .menuwrap').removeClass('on');
    });
});


// portfolio bg, popup
$('.bg, .popup').hide();
$('.design').click(function() {
    const src = $(this).find('img').attr('data-file');
    $('.popup img').attr('src', src);
    $('.bg, .popup').fadeIn();
});
$('.popup button').click(function() {
    $('.bg, .popup').fadeOut();
});




const loader = document.querySelector('.loader');
const html = document.querySelector('html');

html.style.overflow = 'hidden'; //로딩 중 스크롤 방지

window.addEventListener('load', ()=>{

     setTimeout(() => { //  <-* 로딩속도를 구현하기 위한 코드로 실제 적용시 제거
    
      	loader.style.opacity = '0';
		html.style.overflow = 'auto'; //스크롤 방지 해제
      	
        setTimeout(() => {
      		loader.style.display = 'none';
  		}, 300);
        
  }, 2000); // <-* 로딩속도 구현

})

$(function(){

    $('.portpolio2_slider').slick({
          arrows: true,
          dots: true,
          infinite: true,
          speed: 300,
          slidesToShow: 4,
          slidesToScroll: 1,
          responsive: [{
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: false,
            dots: true,
            arrows: false
          }
        },
        {
                  breakpoint: 768,
                  settings: {
                      slidesToShow: 1,
                      slidesToScroll: 1,
                      arrows: false,
                      dots: true
                  }
              }
          ]
      });
  })
  
  


          










