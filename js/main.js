AOS.init();
//anime.js
anime({
  targets: '.line',
  width: '100px',
  easing: 'easeInOutSine',
  duration: 750,
  loop: true,
  direction: 'alternate'
});
anime({
    targets: '.line2',
    width: '140px',
    duration: 1300,
    easing: 'easeInOutQuad',
    loop: true,
    direction: 'alternate'
  });
var slide2 = anime({
      targets: '.slide',
      translateX: ['-100%', '0%'],
      duration: 2500,
      easing: 'easeInOutQuad',
      loop: false,
      autoplay: false,
    });
var slide = anime({
    targets: '.slide',
    translateX: ['0%', '-100%'],
    duration: 2500,
    easing: 'easeInOutQuad',
    loop: false,
    autoplay: false,
    });
var headOff = anime({
    targets: '.head, .cable',
    translateX: ['250px', '0px'],
    duration: 2500,
    easing: 'easeInOutQuad',
    loop: false,
    autoplay: false,
    });
var head = anime({
    targets: '.head, .cable',
    translateX: ['0px', '150px'],
    duration: 2500,
    easing: 'easeInOutQuad',
    loop: false,
    autoplay: false,
    });
var roboheadOff = anime({
    targets: '.head2, .cable2',
    translateX: ['-250px', '0px'],
    duration: 2500,
    easing: 'easeInOutQuad',
    loop: false,
    autoplay: false,
    });
var robohead = anime({
    targets: '.head2, .cable2',
    translateX: ['0px', '-150px'],
    duration: 2500,
    easing: 'easeInOutQuad',
    loop: false,
    autoplay: false,
    });
var cable = anime({
    targets: '.cable path',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutSine',
    duration: 3500,
    direction: 'alternate',
    autoplay: false,
    loop: false,
    });
var cable2 = anime({
    targets: '.cable2 path',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutSine',
    duration: 2500,
    direction: 'alternate',
    delay: 1000,
    autoplay: false,
    loop: false,
    });
var blueoff = anime({
    targets: '#bola',
    duration:2000,
    translateX: ['-675', '0'],
    scale: ['2','1'],
    rotateZ: 360,
    autoplay: false,
    loop: false,
    easing:'easeInOutSine'
    });
var blue = anime({
    targets: '#bola',
    duration:2000,
    translateX: ['0,','-675'],
    scale: ['1','2'],
    rotateZ: 360,
    autoplay: false,
    loop: false,
    easing:'easeInOutSine'
  });
  var redoff = anime({
    targets: '#bola',
    duration:2000,
    translateX: ['675', '0'],
    scale: ['2','1'],
    rotateZ: 360,
    autoplay: false,
    loop: false,
    easing:'easeInOutSine'
    });
var red = anime({
    targets: '#bola',
    duration:2000,
    translateX: ['0,','675'],
    scale: ['1','2'],
    rotateZ: 360,
    autoplay: false,
    loop: false,
    easing:'easeInOutSine'
  });
var slidebolaleftoff = anime({
    targets: '#content2',
    translateX: ['100%', '0%'],
    duration: 2500,
    easing: 'easeInOutQuad',
    loop: false,
    autoplay: false,
  });
var slidebolaleft = anime({
  targets: '#content2',
  translateX: ['0%', '100%'],
  duration: 2500,
  easing: 'easeInOutQuad',
  loop: false,
  autoplay: false,
  });
var slidebolarightoff = anime({
    targets: '#content2',
    translateX: ['-100%', '0%'],
    duration: 2500,
    easing: 'easeInOutQuad',
    loop: false,
    autoplay: false,
  });
var slidebolaright = anime({
  targets: '#content2',
  translateX: ['0%', '-100%'],
  duration: 2500,
  easing: 'easeInOutQuad',
  loop: false,
  autoplay: false,
  });
var fluidlaraxoff = anime({
  targets: '.fluid2, .blackbg',
  translateX: ['-400px', '-0'],
  duration: 2500,
  easing: 'easeInOutQuad',
  loop: false,
  autoplay: false,
  });
var fluidlarax = anime({
  targets: '.fluid2, .blackbg',
  translateX: ['0%', '-400px'],
  duration: 3500,
  easing: 'easeInOutQuad',
  loop: false,
  autoplay: false,
  });
$(document).ready(function () {
    //Slider
    var title = document.querySelector('.slidetext p');
    var year = document.querySelector('.slidetext h1');
    var text = document.querySelector('.rectangle p');
    var image = document.querySelector('#image-slide img');

    var judul = ["John McCarthy","Deep Blue","AlphaGo"];
    var tahun = ["1956", "1977","2016"];
    var sub = ["John McCarthy meyakinkan teman-temannya untuk membantunya melakukan penelitian dalam bidang automata, jaringan saraf, dan pembelajaran intelijensia. Selama 2 bulan di Universitas Dartmouth. Hasilnya adalah program yang mampu berpikir non-numerik dan menyelesaikan masalah pemikiran, yang dinamakan Principia Mathematica.","Deep Blue, Program Pertama komputer yang pertama yang mengalah world champion dalam sebuah permainan catur","AlphaGo mengalahkan juara dunia 18x juara dunia Lee Sedol dalam permainan Go.Dimainkan di seoul korea selatan Alpha Go memenangkan 4 dari 5 game"];
    var number = 0;
    var max = judul.length-1;

    $(year).text(tahun[number]);
    $(title).text(judul[number]);
    $(text).text(sub[number]);  
    $(image).attr("src", "img/rey"+(number+1)+".jpg");

    $("#no1").click(function() {
        number = 0;
    $(".slider a").removeClass("active");
    $("#no"+[number+1]).addClass("active");
    $("#overlay").fadeOut('fast', function(){
    $(year).text(tahun[number]);
    $(title).text(judul[number]);
    $(text).text(sub[number]);  
    $(image).attr("src", "img/rey"+(number+1)+".jpg");
    $("#overlay").fadeIn('fast');
    });
})
    $("#no2").click(function() {
        number = 1;
    $(".slider a").removeClass("active");
    $("#no"+[number+1]).addClass("active");
    $("#overlay").fadeOut('fast', function(){
    $(year).text(tahun[number]);
    $(title).text(judul[number]);
    $(text).text(sub[number]);  
    $(image).attr("src", "img/rey"+(number+1)+".jpg");
    $("#overlay").fadeIn('fast');
    });
})
    $("#no3").click(function() {
        number = 2;
    $(".slider a").removeClass("active");
    $("#no"+[number+1]).addClass("active");
    $("#overlay").fadeOut('fast', function(){
    $(year).text(tahun[number]);
    $(title).text(judul[number]);
    $(text).text(sub[number]);  
    $(image).attr("src", "img/rey"+(number+1)+".jpg");
    $("#overlay").fadeIn('fast');
    });
})
    $("#slidenext").click(function() {
        if(number == max){
            number = 0;
        }else{
            number++;
        }
        $(".slider a").removeClass("active");
        $("#no"+[number+1]).addClass("active");
        $("#overlay").fadeOut('fast', function(){
            $(year).text(tahun[number]);
            $(title).text(judul[number]);
            $(text).text(sub[number]);  
            $(image).attr("src", "img/rey"+(number+1)+".jpg");
            $("#overlay").fadeIn('fast');
        });
    });

    $("#slideprev").click(function() {
        if(number == 0){
            number = max;
        }else{
            number--;
        }
        $(".slider a").removeClass("active");
        $("#no"+[number+1]).addClass("active");
        $("#overlay").fadeOut('fast', function(){
            $(year).text(tahun[number]);
            $(title).text(judul[number]);
            $(text).text(sub[number]);  
            $(image).attr("src", "img/rey"+(number+1)+".jpg");
            $("#overlay").fadeIn('fast');
        });
    });

    //Slider beres
    // const fluid1="M674,759c-145,10-261-66-313-225s-253.3-270.6-74-421C405,14,863-17,911,65c13.1,22.3,27,10,1,133c-17.9,84.7,54.1,144.6,73,237C1008.6,550.8,819,749,674,759z";
    // const fluid2="M1070,193c-29.9,20.9-60,54-55,135s34,167,71,227s40,119-42,225S847,995,688,998s-291-70-339-196s-52-142-132-230s-93-275-9-355s335-110,483-100S1233.2,79.1,1070,193z";
    $("#next").click(function() {
        slide.play();
        head.play();
        roboheadOff.play();
        //Morphing
        // const timeline = anime.timeline({
        //     duration:4500,
        //     easing : "easeInOutExpo"
        //   });
        //   timeline.add({
        //       targets:".fluid path",
            
        //       d: [
        //           {value:fluid2}
        //       ]
       
        //   })
        cable2.play();
    })        
    $("#back").click(function() {
        slide2.play();
        robohead.play();
        headOff.play();
        // const timeline = anime.timeline({
        //     duration:2500,
        //     easing : "easeInOutExpo"
        //   });
        //   timeline.add({
        //       targets:".fluid path",
            
        //       d: [
        //           {value:fluid1}
        //       ]
        //   })
    })
    $(".backbutton1").click(function() {
        fluidlaraxoff.play();
        blueoff.play();
        slidebolaleftoff.play();
        $('#bola').css("filter", "grayscale(100%)");
    })
    $(".backbutton2").click(function() {
        fluidlaraxoff.play();
        redoff.play();
        slidebolarightoff.play();
        $('#bola').css("filter", "grayscale(100%)");
    })
    $(".pilih").click(function(){
        fluidlarax.play();
        blue.play();
        slidebolaleft.play();
        $('#bola').css("filter", "grayscale(0%)");
    })
    $(".pilih2").click(function(){
            fluidlarax.play();
            red.play();
            slidebolaright.play();
        $('#bola').css("filter", "hue-rotate(145deg)");
    })

//Morph
const kedua="M652,639c34,0,545.6-12,566-12s7-456.6,7-477S172.4,140,152,140s-15,470.6-15,491";
const pertama="M1366,713c0,0-90.2-110-386.6-110C801.8,603,469,723,212.6,791.6C61.7,832.1,0,821,0,821V0h1366V713z";
const prevS=document.querySelector('#bukansvg');
prevS.onclick = function() {
    anime({
        duration:1500,
        targets: '#bukansvg',
        translateX: -850,
        translateY: -250,
        scale: 2.2,
        easing:'easeOutExpo',
        width:'2500px'
      });
    const timeline = anime.timeline({
      duration:2000,
      easing : "easeOutExpo"
    });
    timeline.add({
        targets:".apaan",
      
        d: [
            {value:kedua}
        ]
 
    })
}
//Parallax
document.querySelectorAll('.scene').forEach((elem) => {
	
    const modifier = elem.getAttribute('data-mody')
    const modifier2 = elem.getAttribute('data-modx')
    const modifier3 = elem.getAttribute('data-from')
	
	basicScroll.create({
		elem: elem,
		from: modifier3,
		to: modifier3+800,
		direct: true,
		props: {
			'--ty': {
				from: '0',
                to: `${ 5 * modifier }px`,

            },'--tx': {
                from: '0',
                to: `${ 5 * modifier2 }px`,
             }
           
		}
	}).start();
});
});
//ScrollTop
var play = false;
$(window).scroll(function (event) {
    $('#next').each( function(i){
        
        var bottom_of_element = $(this).offset().top + $(this).outerHeight();
        var bottom_of_window = $(window).scrollTop() + $(window).height();
        

        if( bottom_of_window >= bottom_of_element){
            if(play == false){
            play = true;
            cable.play();
            console.log('Animation started');
            }
            
        }else if( bottom_of_window <= bottom_of_element-300){
            cable.restart();
            play = false;
        }            
    }); 
});