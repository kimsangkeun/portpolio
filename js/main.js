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

// lodash

let toTopEl = document.querySelector('#to-top');
window.addEventListener('scroll', _.throttle(function(){
    console.log(window.scrollY);
    if(window.scrollY > 500){
        
        gsap.to(toTopEl, .2,{
            x: 0
        });
    } else{
       
        //버튼 숨기기
        gsap.to(toTopEl, .2,{
            x: 100
        });
    }
}, 300)); //_.throttle(함수,시간)


toTopEl.addEventListener('click', function(){
    gsap.to(window, .7,{
        scrollTo: 0
    });
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




          










