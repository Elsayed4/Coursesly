/*global console*/
$(function(){

//clicking eye fnction
$('.regester .input-group-append .pass_eye').click(function(){
    $(this).toggleClass('pass_eye').toggleClass('fa-eye');
    $(this).toggleClass('pass_eye').toggleClass('fa-eye-slash');
    $('.pass_txt').attr('type','text');
});//end of eye password function

$('.confirm_eye').click(function(){
    $(this).toggleClass('pass_eye').toggleClass('fa-eye');
    $(this).toggleClass('pass_eye').toggleClass('fa-eye-slash');
    $('.confirm_txt').attr('type','text');
}); 

$('.fa-eye').click(function(){
    $(this).toggleClass('pass_eye').toggleClass('fa-eye');
    $(this).toggleClass('pass_eye').toggleClass('fa-eye-slash');
    $('.confirm_txt').attr('type','password');
}); 

// start handlig connnect courses with top list
$(".mycoursestop #ended").click(function(){
   $('#ended1').css('display','block');
   $('#now1').css('display','none');
   $('#notstarted1').css('display','none');
})

$(".mycoursestop #notstarted").click(function(){
    $('#notstarted1').css('display','block');
    $('#now1').css('display','none');
    $('#ended1').css('display','none');
 })
 
 $(".mycoursestop #now").click(function(){
    $('#now1').css('display','block');
    $('#ended1').css('display','none');
    $('#notstarted1').css('display','none');
 })
 
// End handlig connnect courses with top list

/*.ul-courses li  handling links color */

$(".ul-courses li").click(function(){
    $(this).addClass('activeli').siblings().removeClass('activeli')
    $(this).css('border-color','#42B39A').siblings().css('border-color','transparent');
    
})

//startig Handling dropdown list in mycourses page 
$(".ul-courses .fa-angle-down").click(function(){
    $(".ul-courses #now,.ul-courses #notstarted").slideDown(500);
    $(this).fadeOut(function(){
        $(".ul-courses .fa-angle-up").fadeIn();
    });
})

//Ending Handling dropdown list in mycourses page 
$(".ul-courses .fa-angle-up").click(function(){
    $(".ul-courses #now,.ul-courses #notstarted").slideUp(500);
    $(this).fadeOut(function(){
        $(".ul-courses .fa-angle-down").fadeIn();
    });
})

$('.diploma-department ul .secli img.face2').css("display","inline");
$('.diploma-department ul .secli img.face1').css("display","none");
// diploma list right li handling
$('.diploma-department ul li').click(function(){
    $(this).css('color','#FC8E0B').siblings().css('color','#707070');
    $('.diploma-department ul li img.face2').css("display","none")
    $('.diploma-department ul li img.face1').css("display","inline")
    $(this).find("img.face2").css("display","inline");
    
    $(this).find("img.face1").css("display","none");

    $('.fristli').css('color','#fff')
});



setInterval(function(){ 
    $('.aboutCourse-son .caret-cotainer').toggleClass('animi');
     }, 600);

// $('.modal .modal-header .close').click(function(){
//  $('modal #playerID').css('display','none')
// });

$('.diploma .container .carousel').carousel('pause');



/* Start Handling close and show introduction Youtube Video */
/*video introduction link*/
  var srcs = "https://www.youtube.com/embed/w-FM0uwQrHs?list=PLLXntwspGdhA_nu9xAs08YrNap4Ttlkq0";

$('.modal .close').click(function(){
  $('.modal .modal-body iframe').attr('src','');
  console.log("change src")
})

$('.aboutCourse-son .caret-cotainer').click(function(){
    $('.modal .modal-body iframe').attr('src',srcs);
})
/* End Handling close and show introduction Youtube Video */


$('.udemy .fa-times').click(function(){
    $('.udemy .hiddenMe').css("display","none");
    $('.udemy .fully').removeClass('col-lg-8').addClass('col-lg-12');
    $('.udemy .fa-arrow-right').removeClass('hidden')

})

$(".udemy .fa-arrow-right").click(function(){
    $(this).addClass('hidden');
    $('.udemy .hiddenMe').css("display","block");
    $('.udemy .fully').removeClass('col-lg-12').addClass('col-lg-8');

  });


  $('section.others ul.nav-pills li').click(function(){
      $(this).addClass('br-li').siblings().removeClass('br-li')
  })



/* Handling Delete*/
$('.delete-note').click(function(){
  $(this).parents('.Nots').fadeOut(250)
 })

 $('.edit-note').click(function(){
    $(this).parents('.Nots').find('.note-p2').css('display','none');
    $(this).parents('.Nots').find('.parent-input-note-p2').fadeIn();
})

  var values = $('.note-p22').text()
   $(".input-note-p2 .form-control").val(values);


/* Handling save*/   
$('.Nots .save').click(function(){
    $(this).parents('.Nots').find('.note-p2').css('display','block');
    $(this).parents('.Nots').find('.note-p2').fadeIn();
    let addss = $(this).parents('.Nots').find('.parent-input-note-p2').val();
    $(this).parents('.Nots').find('.parent-input-note-p2').css('display','none');
    $(this).parents('.Nots').find('.note-p2').text(addss)

  
})

});















 