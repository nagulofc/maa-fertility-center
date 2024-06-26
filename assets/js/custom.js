(function($) {
    'use strict';jQuery('.mean-menu').meanmenu({
        meanScreenWidth:"991"
    });

    $(window).on('scroll',function() {
        if($(this).scrollTop()>150) {
            $('.navbar-area').addClass("sticky-nav");
        }
        else{
            $('.navbar-area').removeClass("sticky-nav");
        }
    });

    $('.close-btn').on('click',function(){
        $('.search-overlay').fadeOut();
        $('.search-btn').show();
        $('.close-btn').removeClass('active');
    });

    $('.search-btn').on('click',function(){
        $(this).hide();$('.search-overlay').fadeIn();
        $('.close-btn').addClass('active');
    });

    $(".burger-menu").on('click',function(){
        $('.sidebar-modal').toggleClass('active');
    });

    $(".sidebar-modal-close-btn").on('click',function(){
        $('.sidebar-modal').removeClass('active');
    });
            
    $(".side-nav-responsive .dot-menu").on("click",function(){
        $(".side-nav-responsive .container .container").toggleClass("active");
    });

    $('.client-slider').owlCarousel({
        loop:true,margin:30,nav:false,dots:true,autoplay:true,
        autoplayHoverPause:true,responsive:{
            0:{items:1},1000:{items:2}
        }
    })

    $('select').niceSelect();
    $('.tab ul.tabs').addClass('active').find('> li:eq(0)').addClass('current');
    $('.tab ul.tabs li a').on('click',function(g){
        var tab=$(this).closest('.tab'),index=$(this).closest('li').index();
        tab.find('ul.tabs > li').removeClass('current');
        $(this).closest('li').addClass('current');
        tab.find('.tab_content').find('div.tabs_item').not('div.tabs_item:eq('+index+')').slideUp();
        tab.find('.tab_content').find('div.tabs_item:eq('+index+')').slideDown();g.preventDefault();
    });
    
    $('.accordion').find('.accordion-title').on('click',function(){
        $(this).toggleClass('active');
        $(this).next().slideToggle('fast');
        $('.accordion-content').not($(this).next()).slideUp('fast');
        $('.accordion-title').not($(this)).removeClass('active');
    });
    
    $('.popup-btn').magnificPopup({disableOn:700,type:'iframe',mainClass:'mfp-fade',
        removalDelay:160,preloader:false,fixedContentPos:false
    });
    
    function makeTimer(){
        var endTime=new Date("september 30, 2022 17:00:00 PDT");
        var endTime=(Date.parse(endTime))/1000;
        var now=new Date();var now=(Date.parse(now)/1000);
        var timeLeft=endTime-now;var days=Math.floor(timeLeft/86400);
        var hours=Math.floor((timeLeft-(days*86400))/3600);
        var minutes=Math.floor((timeLeft-(days*86400)-(hours*3600))/60);
        var seconds=Math.floor((timeLeft-(days*86400)-(hours*3600)-(minutes*60)));
        if(hours<"10"){hours="0"+hours;}
        if(minutes<"10"){minutes="0"+minutes;}
        if(seconds<"10"){seconds="0"+seconds;}

        $("#days").html(days+"<span>Days</span>");
        $("#hours").html(hours+"<span>Hours</span>");
        $("#minutes").html(minutes+"<span>Minutes</span>");
        $("#seconds").html(seconds+"<span>Seconds</span>");
    }

setInterval(function(){
    makeTimer();
},300);



$(".newsletter-form").validator().on("submit",function(event){
    if(event.isDefaultPrevented()){
        formErrorSub();
        submitMSGSub(false,"Please enter your email correctly");
    }
    else{
        event.preventDefault();
    }
});

function callbackFunction(resp){
    if(resp.result==="success"){
        formSuccessSub();
    }
    else{
        formErrorSub();
    }
}

function formSuccessSub(){
    $(".newsletter-form")[0].reset();
    submitMSGSub(true,"Thank you for subscribing!");
    setTimeout(function(){
        $("#validator-newsletter").addClass('hide');
    },4000)
}

function formErrorSub(){
    $(".newsletter-form").addClass("animated shake");

    setTimeout(function(){
        $(".newsletter-form").removeClass("animated shake");
    },1000)
}

function submitMSGSub(valid,msg) {
    if(valid){
        var msgClasses="validation-success";
    }
    else
    {
        var msgClasses="validation-danger";
    }
    $("#validator-newsletter").removeClass().addClass(msgClasses).text(msg);
}

$(".newsletter-form").ajaxChimp({
    url:"",callback:callbackFunction});
    $('body').append('<div id="toTop" class="top-btn"><i class="bx bx-chevrons-up"></i></div>');
    $(window).on('scroll',function(){
        if($(this).scrollTop()!=0){

            $('#toTop').fadeIn();
        }
        else{
            $('#toTop').fadeOut();
        }});
        $('#toTop').on('click',function(){
            $("html, body").animate({scrollTop:0},600);
            return false;
        });
        
        new WOW().init();jQuery(window).on('load',function(){
            jQuery(".preloader").fadeOut(500);
        });
        $('body').append("<a href='' target='_blank' class='buy-now-btn'><img src='assets/img/envato.png' alt='envato'/>Buy Now</a>");$('body').append("<div class='switch-box'><label id='switch' class='switch'><input type='checkbox' onchange='toggleTheme()' id='slider'><span class='slider round'></span></label></div>");})(jQuery);function setTheme(themeName){localStorage.setItem('theme',themeName);document.documentElement.className=themeName;}



        function toggleTheme(){
            if(localStorage.getItem('theme')==='theme-dark'){
                setTheme('theme-light');}else{setTheme('theme-dark');
            }
        }

(function(){
    if(localStorage.getItem('theme')==='theme-dark'){
        setTheme('theme-dark');document.getElementById('slider').checked=false;
    }else{
        setTheme('theme-light');document.getElementById('slider').checked=true;
    }})
    ();