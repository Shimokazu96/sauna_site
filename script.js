$(function(){
  var topBtn = $('#pagetop');

  topBtn.hide();

  $(window).on('scroll',function(){
    if($(this).scrollTop() > 200){
      topBtn.fadeIn();
    }else{
      topBtn.fadeOut();
    }
  });
  topBtn.on('click',function(){
    $('body,html').animate({
      scrollTop:0
    },1000);
    return false
  }); 
});